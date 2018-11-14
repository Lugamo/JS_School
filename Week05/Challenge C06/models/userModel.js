const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/bookshelf');

// Check if connection was successful
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
