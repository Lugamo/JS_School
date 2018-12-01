const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/bookshelf');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

function deleteCollection(collection) {
  db.dropCollection(collection, (err) => {
    if (err) {
      console.log(`error deleting ${collection} collection`);
    } else {
      console.log('collection dropped');
    }
  });
}

deleteCollection('books');
deleteCollection('users');
deleteCollection('borrowed-books');
