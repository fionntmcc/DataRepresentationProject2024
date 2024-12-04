const { text } = require('body-parser');
const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  year: Number,
  text: String,
});
const Book = mongoose.model('books', bookSchema);
module.exports = Book;