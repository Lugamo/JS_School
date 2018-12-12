const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/bookshelf');

// Check if connection was successful
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

const userSchema = mongoose.Schema({
  id: {
    type: String,
    trim: true,
    unique: true,
    required: true,
  },
  username: {
    type: String,
    trim: true,
    unique: true,
    required: true,
  },
  fullname: {
    type: String,
    trim: false,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    required: true,
  },
  hash_password: {
    type: String,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  role: {
    type: String,
    default: 'User',
  },
});

userSchema.methods.comparePassword = (password, encryptPass) => {
  return bcrypt.compareSync(password, encryptPass);
};
const User = mongoose.model('User', userSchema);
module.exports = User;
