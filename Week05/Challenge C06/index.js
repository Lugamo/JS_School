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
app.get('/books', credentials.verifyCredentials, (req, res) => {
  bookController.getBooks(req, res);
});

// Get book by isbn
app.get('/books/:id', credentials.verifyCredentials, (req, res) => {
  bookController.getBookbyId(req, res);
});

app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});
