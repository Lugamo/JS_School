const mongoose = require('mongoose');
const Book = require('../models/bookModel');

mongoose.connect('mongodb://localhost/bookshelf');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

function queryResponse(data, res) {
  res.status(200).send(data);
}

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
  } else {
    res.status(204).send('Not allowed Query');
  }
}

function getBookbyId(req, res) {
  const bookID = req.params.id;
  Book.find({ id: bookID }).exec()
    .then((result) => {
      if (result.length === 0) {
        const notFound = {
          status: 404,
          description: 'Not found',
          message: 'Book not found',
        };
        res.status(404).send(notFound);
      } else {
        queryResponse(result, res);
      }
    });
}

module.exports = {
  getBooks,
  getBookbyId,
};
