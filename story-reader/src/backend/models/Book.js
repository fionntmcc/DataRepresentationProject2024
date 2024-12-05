const { text } = require('body-parser');
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title:String,
  year:String,
  poster:String,
  posterImg: { // image upload
    data: Buffer,
    contentType: String,
  },
  text:String,
});

const Book = mongoose.model('books', bookSchema);
module.exports = Book;