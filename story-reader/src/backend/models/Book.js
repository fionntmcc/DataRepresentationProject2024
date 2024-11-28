const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  year: Number
});
const Book = mongoose.model('books', bookSchema);
module.exports = Book;