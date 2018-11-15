/* eslint-disable max-len */
const fetch = require('node-fetch');
const mongoose = require('mongoose');

// To generate the ID
const uuidv4 = require('uuid/v4');
const Book = require('../models/bookModel');

mongoose.connect('mongodb://localhost/bookshelf');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

const booksIsbn = [
  '9780143127550',
  '9781501173219',
  /*
  '9780143126829',
  '9780802123701',
  '9780425274866',
  '9781476770390',
  '9781501138386',
  '9780804172448',
  '9780812993011',
  '9781439172742',
  '9781593279509',
  '9781449331818',
  '9780345816023',
  '9780307474728',
  '9781537392349',
  */
];
const bookObject = {
  id: '',
  title: '',
  author: '',
  year: 1900,
  image: '',
  pages: 1,
  summary: '',
  rating: 1.0,
  isbn: '',
  language: '',
  city: '',
  digital: true,
  borrowed: 1,
};
// random Int between a set min-max
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// every time is called give one of the three cities in order
function* getCity() {
  while (true) {
    yield 'Quito';
    yield 'Medellin';
    yield 'Cartagena';
  }
}
function getBooks() {
  const ApiKey = 'AIzaSyDirtPnHHm5gGIDuEZntIFlu_55xRsl3Jw' //'AIzaSyBo8AzYSOq0ByURMdlhCUghIqNGMCIDgkc';
  const cityIterator = getCity();
  booksIsbn.forEach((isbnBook) => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbnBook}&key=${ApiKey}`)
      .then(response => response.json())
      .then((myJson) => {
        const jsonNesting = myJson.items[0].volumeInfo;
        bookObject.id = uuidv4();
        bookObject.title = jsonNesting.title;
        bookObject.author = jsonNesting.authors;
        // eslint-disable-next-line prefer-destructuring
        bookObject.year = jsonNesting.publishedDate.split('-')[0];
        bookObject.image = jsonNesting.imageLinks.thumbnail;
        bookObject.pages = jsonNesting.pageCount;
        bookObject.summary = jsonNesting.description;

        // If there is no average value, put some random number (1-5)
        bookObject.rating = (jsonNesting.averageRating) ? jsonNesting.averageRating : getRandomInt(1, 5);

        bookObject.isbn = isbnBook.toString();
        bookObject.language = jsonNesting.language;
        bookObject.city = cityIterator.next().value;

        // If the result of random is less than 8 True else false
        bookObject.digital = (getRandomInt(0, 10) < 8);

        // Random number of avaible books (1-3)
        bookObject.borrowed = getRandomInt(1, 3);
        return bookObject;
      }).then((bookobj) => {
        const newBook = new Book(bookobj);
        newBook.save((err) => {
          if (err) {
            console.log(err);
          } else {
            console.log('New Collection created!!');
          }
        });
      })
      .catch((err) => {
        console.log(`there was a problem: ${err}`);
      });
  });
}
getBooks();
