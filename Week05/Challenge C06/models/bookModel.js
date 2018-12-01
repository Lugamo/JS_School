const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/bookshelf');

// Check if connection was successful
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

const bookSchema = mongoose.Schema({
  id: {
    type: String,
    trim: true,
    required: true,
  },
  title: {
    type: String,
    trim: false,
    required: true,
  },
  author: [{
    type: String,
    trim: false,
    required: true,
  }],
  year: {
    type: Number,
    required: true,
    max: Date.year,
  },
  image: {
    type: String,
    trim: true,
    required: false,
    default: 'data:image/png;base64,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',
  },
  pages: {
    type: Number,
    required: true,
  },
  summary: {
    type: String,
    trim: false,
    required: false,
    default: 'Summary not avaible yet',
  },
  rating: {
    type: Number,
    required: false,
  },
  isbn: {
    type: String,
    unique: true,
    trim: true,
    required: true,
  },
  language: {
    type: String,
    trim: true,
    required: true,
  },
  city: {
    type: String,
    trim: false,
  },
  digital: {
    type: Boolean,
    required: true,
  },
  quantity: {
    type: Number,
    default: 1,
  },
  borrowed: {
    type: Number,
    default: 0,
  },
});

bookSchema.plugin(mongoosePaginate);
const Book = mongoose.model('Book', bookSchema);
module.exports = Book;
