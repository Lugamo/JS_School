/* eslint-disable consistent-return */
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// To generate the ID
const uuidv4 = require('uuid/v4');

const keyword = require('../keyword/keyword');
const User = require('../models/userModel');


// Add a new user to the collection
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

// Login to get a token
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
        return res.json({
          token: jwt.sign({
            email: user.email,
            username: user.username,
            id: user.id,
          },
          keyword),
          user: user.username,
        });
      }
    }
  });
}

module.exports = {
  signIn,
  register,
};
