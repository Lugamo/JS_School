const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
// To generate the ID
const uuidv4 = require('uuid/v4');
const User = require('../models/userModel');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/bookshelf');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

// Create user with random data
function createUser(iteration) {
  const userobj = {
    id: uuidv4(),
    username: `Username-${iteration}`,
    fullname: `Full name for user-${iteration}`,
    email: `user-${iteration}@jobsity.com`,
    hash_password: bcrypt.hashSync(`pass00${iteration}`, 10),
  };
  const newUser = new User(userobj);
  newUser.save((err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('New User Collection created!!');
    }
  });
}

// users to add
for (let i = 0; i < 2; i += 1) {
  createUser(i + 1);
}
