const express = require('express');
const bodyParser = require('body-parser');
const userController = require('./controllers/userController');
const bookController = require('./controllers/bookController');
const credentials = require('./controllers/credentialsController');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

// To register new users
app.post('/auth/register', (req, res) => {
  userController.register(req, res);
});

// To login
app.post('/auth/login', (req, res) => {
  userController.signIn(req, res);
});

// Get all books
app.get('/books', (req, res) => {
  bookController.getBooks(req, res);
});

// Get book by id
app.get('/books/:id', (req, res) => {
  bookController.getBookbyId(req, res);
});

// Lend a book
app.post('/books/:id/lend', (req, res) => {
  bookController.lendABook(req, res);
});

// show all lend books by user
app.get('/user/mybooks', (req, res) => {
  bookController.booksByUser(req, res);
});

app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});
