const express = require('express');
const bodyParser = require('body-parser');
const userController = require('./controllers/userController');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

// To register new users
app.post('/api/auth/register', (req, res) => {
  userController.register(req, res);
});

// To login
app.post('/api/auth/login', (req, res) => {
  userController.signIn(req, res);
});

app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});
