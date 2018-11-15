/* eslint-disable consistent-return */
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// To generate the ID
const uuidv4 = require('uuid/v4');

const User = require('../models/userModel');

function register(req, res) {
  const newUser = new User(req.body);
  newUser.hash_password = bcrypt.hashSync(req.body.password, 10);
  newUser.id = uuidv4();
  newUser.save((err, user) => {
    if (err) {
      return res.status(400).send({
        message: err,
      });
    }
    // eslint-disable-next-line no-param-reassign
    user.hash_password = undefined;
    return res.json(user);
  });
}

function signIn(req, res) {
  User.findOne({
    email: req.body.email,
  }, (err, user) => {
    if (err) throw err;
    if (!user) {
      res.status(401).json({ message: 'Authentication failed. User not found.' });
    } else if (user) {
      if (!user.comparePassword(req.body.password, user.hash_password)) {
        res.status(401).json({ message: 'Authentication failed. Wrong password.' });
      } else {
        return res.json({ token: jwt.sign({ email: user.email, username: user.username, id: user.id }, 'BookAPIs') });
      }
    }
  });
}

function loginRequired(req, res, next) {
  if (req.user) {
    next();
  } else {
    return res.status(401).json({ message: 'Unauthorized user!' });
  }
}

module.exports = {
  signIn,
  register,
  loginRequired,
};