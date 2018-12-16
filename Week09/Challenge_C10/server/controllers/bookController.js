const mongoose = require('mongoose');
const Book = require('../models/bookModel');
const LendUserBook = require('../models/book-userModel');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/bookshelf');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

function queryResponse(data, res) {
  if (data.docs.length === 0) {
    res.status(200).send({ message: 'Book not found' });
  } else {
    const indexPage = Number(data.page);
    res.status(200).send(
      {
        message: 'OK',
        docs: data.docs,
        total: data.total,
        limit: data.limit,
        page: indexPage,
        pages: data.pages,
        nextPage: indexPage < data.pages ? `&page=${indexPage + 1}` : null,
        prevPage: indexPage > 1 ? `&page=${indexPage - 1}` : null,
      },
    );
  }
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
  const theQuery = req.query;
  const thePage = theQuery.page;

  // Default query and options for books
  let query = {};
  const options = {
    select: '-_id',
    page: (Number(thePage) || 1),
    limit: 15,
  };

  if (!theQuery.city && !theQuery.digital && !theQuery.isbn && !theQuery.q && theQuery.page) {
    Book.paginate(query, options)
      .then(datajson => queryResponse(datajson, res));
  } else if (theQuery.city) {
    query = { city: theQuery.city };
    Book.paginate(query, options)
      .then(datajson => queryResponse(datajson, res));
  } else if (theQuery.digital) {
    query = { digital: theQuery.digital };
    Book.paginate(query, options)
      .then(datajson => queryResponse(datajson, res));
  } else if (theQuery.isbn) {
    query = { isbn: theQuery.isbn };
    Book.paginate(query, options)
      .then(datajson => queryResponse(datajson, res));
  } else if (theQuery.title) {
    query = { title: { $regex: theQuery.title, $options: 'i' } };
    Book.paginate(query, options)
      .then(datajson => queryResponse(datajson, res));
  } else if (theQuery.author) {
    query = { author: { $regex: theQuery.author, $options: 'i' } };
    Book.paginate(query, options)
      .then(datajson => queryResponse(datajson, res));
  } else if (theQuery.q) {
    query = {
      $or: [
        { author: { $regex: theQuery.q, $options: 'i' } },
        { title: { $regex: theQuery.q, $options: 'i' } },
      ],
    };
    Book.paginate(query, options)
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
        res.status(200).send({
          message: 'OK',
          docs: result,
        });
      }
    });
}

// lend a book and get it in your collection
function lendABook(req, res) {
  const socketIO = req.app.get('socketIO');
  const bookID = req.params.id;
  const trasactionDate = new Date();

  Book.find({ id: bookID }).exec()
    .then((result) => {
      // Check if the id exist
      if (checkBookExist(result, res)) {
        // Check if the user alredy lend that book or not
        // req.user.id
        LendUserBook.find({ user: req.user.id, book: bookID }).exec()
          .then((lend) => {
            const newLend = new LendUserBook({
              user: req.user.id,
              book: bookID,
              bookTitle: result[0].title,
              loanDate: req.body.loanDate,
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
                    ).exec()
                      .then(() => {
                        Book.findOne({ id: bookID }).exec()
                          .then((book) => {
                            res.status(200).send({
                              status: 'OK',
                              message: 'book added to your collection!!',
                              trasactionDate: trasactionDate.getTime,
                              bookData: book,
                            });

                            // Emit that someone lend a copy of the book
                            socketIO.emit('reservation_done', book);
                          });
                      });
                  }
                });
              } else {
                res.status(200).send({
                  status: 'BAD',
                  message: 'No more copies of this book to lend',
                  transactionDate: trasactionDate.getTime(),
                });
              }
            } else {
              res.status(200).send({
                status: 'BAD',
                message: 'This book is alredy yours',
                transactionDate: trasactionDate.getTime(),
              });
            }
          });
      }
    });
}

function deleteABook(req, res) {
  const bookID = req.params.id;
  Book.find({ id: bookID }).exec()
    .then((result) => {
      // Check if the id exist
      if (checkBookExist(result, res)) {
        // Check if the user alredy lend that book or not
        LendUserBook.find({ user: req.user.id, book: bookID }).exec()
          .then((lend) => {
            if (lend.length !== 0) {
              // Save the transaction
              LendUserBook.findByIdAndRemove(lend[0].id, (err) => {
                if (err) {
                  console.log(err);
                } else {
                  // And increment the borrowed field of the book
                  Book.update(
                    { id: bookID },
                    { $inc: { borrowed: -1 } },
                  ).exec();
                  res.status(200).send({
                    message: 'book delete from your collection!!',
                  });
                }
              });
            } else {
              res.status(200).send({ message: 'You don\'t have copies of this book' });
            }
          });
      }
    });
}

function booksByUser(req, res) {
  const infoNotShow = {
    _id: 0,
    user: 0,
    __v: 0,
  };
  LendUserBook.find({ user: req.user.id }, infoNotShow).exec()
    .then((result) => {
      if (result.length === 0) {
        res.status(200).send({ message: 'No borrowed book yet' });
      } else {
        const thePage = req.query.page;
        const arrayID = [];
        const options = {
          select: '-_id',
          page: (Number(thePage) || 1),
          limit: 15,
        };
        result.forEach((element) => {
          arrayID.push(element.book);
        });
        const query = { id: { $in: arrayID } };
        Book.paginate(query, options)
          .then(datajson => queryResponse(datajson, res));
      }
    });
}

module.exports = {
  getBooks,
  getBookbyId,
  lendABook,
  booksByUser,
  deleteABook,
};
