/* eslint-disable max-len */
const fetch = require('node-fetch');
const mongoose = require('mongoose');

// To generate the ID_
const uuidv4 = require('uuid/v4');
const Book = require('../models/bookModel');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/bookshelf');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

// Books to random data
const booksIsbn = [
  '9780143127550',
  '9780143126829',
  '9780425274866',
  '9780060598242',
  '9781501175466',
  '9780375845598',
  '9780399590504',
  '9780547928227',
  '9780545586177',
  '9780147515872',
  '9781400034710',
  '9780785814535',
  '9781501138386',
  '9780765367297',
  '9781631490330',
  '9780525540830',
  '9780441013593',
  '9780547928203',
  '9780399592522',
  '9780451491619',
  '9781506703671',
  '9781503904194',
  '9781524796280',
  '9780399593512',
  '9781506703350',
  '9780802119599',
  '9781982102319',
  '9781617293344',
  '9780307389732',
  '9781616550417',
  '9780399179228',
  '9780062874832',
  '9781338263893',
  '9780525478812',
  '9781451673319',
  '9781477848661',
];
const bookObject = {
  id: '',
  title: '',
  author: [],
  year: 1900,
  image: '',
  pages: 1,
  summary: '',
  rating: 1.0,
  isbn: '',
  language: '',
  city: '',
  digital: true,
  quantity: 1,
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

// Connect to google api, download the data and put it in in MongoDB bookshelf collection
function getBooks() {
  const ApiKey = 'AIzaSyDirtPnHHm5gGIDuEZntIFlu_55xRsl3Jw';
  const cityIterator = getCity();
  booksIsbn.forEach((isbnBook) => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbnBook}&key=${ApiKey}`)
      .then(response => response.json())
      .then((myJson) => {
        const jsonNesting = myJson.items[0].volumeInfo;
        bookObject.id = uuidv4();
        bookObject.title = jsonNesting.title;

        // If no author, put the publisher as an author
        if (jsonNesting.authors) {
          bookObject.author = jsonNesting.authors;
        } else {
          bookObject.author = [jsonNesting.publisher];
        }

        // eslint-disable-next-line prefer-destructuring
        bookObject.year = jsonNesting.publishedDate.split('-')[0];
        bookObject.image = jsonNesting.imageLinks.thumbnail;
        bookObject.pages = jsonNesting.pageCount;
        bookObject.summary = jsonNesting.description;

        // If there is no average value, put some random number (1-5)
        bookObject.rating = (jsonNesting.averageRating) ? jsonNesting.averageRating : getRandomInt(1, 5);

        bookObject.isbn = isbnBook.toString();
        bookObject.language = jsonNesting.language;

        // If the result of random is less than 6 True else false
        bookObject.digital = (getRandomInt(0, 10) < 6);

        // If the book is digital, can be lend unlimited times.
        if (bookObject.digital === true) {
          bookObject.city = null;
          bookObject.quantity = null;
          bookObject.borrowed = getRandomInt(0, 3);
        } else {
          bookObject.city = cityIterator.next().value;
          bookObject.quantity = 3;
          bookObject.borrowed = getRandomInt(0, 3);
        }
        return bookObject;
      }).then((bookobj) => {
        const newBook = new Book(bookobj);
        newBook.save((err) => {
          if (err) {
            console.log(err);
          } else {
            console.log('New Book Collection created!!');
          }
        });
      })
      .catch((err) => {
        console.log(`there was a problem: ${err} --- ${isbnBook}`);
      });
  });
}
getBooks();
