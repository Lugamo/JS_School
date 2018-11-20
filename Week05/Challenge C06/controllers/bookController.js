const mongoose = require('mongoose');
const Book = require('../models/bookModel');
const LendUserBook = require('../models/book-userModel');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/bookshelf');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

function queryResponse(data, res) {
  res.status(200).send(data);
}
function checkBookExist(data, res) {
  if (data.length === 0) {
    const notFound = {
      status: 404,
      description: 'Not found',
      message: 'Book not found',
    };
    res.status(404).send(notFound);
    return null;
  }
  return data;
}

// get the books, can be added querys to filter data, return part of the book info
function getBooks(req, res) {
  const infoNotShow = {
    _id: 0,
    quantity: 0,
    borrowed: 0,
  };
  const theQuery = req.query;
  if (Object.keys(theQuery).length === 0) {
    Book.find({}, infoNotShow).exec()
      .then(datajson => queryResponse(datajson, res));
  } else if (theQuery.city) {
    Book.find({ city: theQuery.city }, infoNotShow).exec()
      .then(datajson => queryResponse(datajson, res));
  } else if (theQuery.digital) {
    Book.find({ digital: theQuery.digital }, infoNotShow).exec()
      .then(datajson => queryResponse(datajson, res));
  } else if (theQuery.isbn) {
    Book.find({ digital: theQuery.isbn }, infoNotShow).exec()
      .then(datajson => queryResponse(datajson, res));
  } else {
    res.status(204).send('Not allowed Query');
  }
}

// get all the info about one book
function getBookbyId(req, res) {
  const bookID = req.params.id;
  Book.find({ id: bookID }).exec()
    .then((result) => {
      if (checkBookExist(result, res)) {
        queryResponse(result, res);
      }
    });
}

// lend a book and get it in your collection
function lendABook(req, res) {
  const bookID = req.params.id;
  Book.find({ id: bookID }).exec()
    .then((result) => {
      // Check if the id exist
      if (checkBookExist(result, res)) {
        // Check if the user alredy lend that book or not
        LendUserBook.find({ user: req.user.id, book: bookID }).exec()
          .then((lend) => {
            const newLend = new LendUserBook({
              user: req.user.id,
              book: bookID,
              bookTitle: result[0].title,
            });
            if (lend.length === 0) {
              /**
               * If the book is not digital, check the availability
               * If the book is digital just lend it
               */
              if (result[0].quantity > result[0].borrowed || result[0].digital === true) {
                // Save the transaction
                newLend.save((err) => {
                  if (err) {
                    console.log(err);
                  } else {
                    // And increment the borrowed field of the book
                    Book.update(
                      { id: bookID },
                      { $inc: { borrowed: 1 } },
                    ).exec();
                    res.status(200).send({
                      message: 'book added to your collection!!',
                    });
                  }
                });
              } else {
                res.status(200).send({ message: 'No more copies of this book to lend' });
              }
            } else {
              res.status(200).send({ message: 'This book is alredy yours' });
            }
          });
      }
    });
}

function booksByUser(req, res) {
  const infoNotShow = {
    _id: 0,
    book: 0,
    user: 0,
    __v: 0,
  };
  LendUserBook.find({ user: req.user.id }, infoNotShow).exec()
    .then((result) => {
      if (result.length === 0) {
        res.status(200).send({ message: 'No borrowed book yet' });
      } else {
        res.status(200).send(result);
      }
    });
}

module.exports = {
  getBooks,
  getBookbyId,
  lendABook,
  booksByUser,
};
