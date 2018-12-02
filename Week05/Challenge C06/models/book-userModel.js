const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/bookshelf');

// Check if connection was successful
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

const dateBook = new Date();
let loanBook = new Date();
let defaultDate = new Date();
loanBook = dateBook.setDate(dateBook.getDate() + 15);
defaultDate = dateBook.setDate(dateBook.getDate() + 5);


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
  loanDate: {
    type: Date,
    required: false,
    minimum: dateBook.getTime,
    maximum: loanBook.getTime,
    exclusivemaximum: false,
    default: defaultDate.getTime,
  },
});

const LendUserBook = mongoose.model('Borrowed-Books', bookuserSchema);
module.exports = LendUserBook;
