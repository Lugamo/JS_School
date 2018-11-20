const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/bookshelf');

// Check if connection was successful
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

const bookuserSchema = mongoose.Schema({
  user: {
    type: String,
    trim: true,
    required: true,
  },
  book: {
    type: String,
    trim: true,
    required: true,
  },
  bookTitle: {
    type: String,
    trim: false,
    required: true,
  },
  lendDate: {
    type: Date,
    default: Date.now,
  },
});

const LendUserBook = mongoose.model('Borrowed-Books', bookuserSchema);
module.exports = LendUserBook;
