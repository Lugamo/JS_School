const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userController = require('./controllers/userController');
const bookController = require('./controllers/bookController');
const credentials = require('./controllers/credentialsController');

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(cors({
  origin: 'http://localhost:8080',
  credentials: true,
}));

// To register new users
app.post('/users', (req, res) => {
  userController.register(req, res);
});

// To login
app.post('/token', (req, res) => {
  userController.signIn(req, res);
});

// Get all books
app.get('/books', credentials.verifyCredentials, (req, res) => {
  bookController.getBooks(req, res);
});

// Get book by id
app.get('/books/:id', credentials.verifyCredentials, (req, res) => {
  bookController.getBookbyId(req, res);
});

// Lend a book
app.post('/books/:id/user/', credentials.verifyCredentials, (req, res) => {
  bookController.lendABook(req, res);
});

// Delete a book
app.delete('/books/:id/user/', credentials.verifyCredentials, (req, res) => {
  bookController.deleteABook(req, res);
});

// show all lend books by user
app.get('/me/books', credentials.verifyCredentials, (req, res) => {
  bookController.booksByUser(req, res);
});

app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});
