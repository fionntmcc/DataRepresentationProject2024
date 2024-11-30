/*
    Express.js allows for easy creation of a server that 
    handles routes and uses URL params
*/
require('dotenv').config();
const express = require('express');
const app = express();

/* 
    cors is a middleware that defines what a ips are allowed to communicate
    with the server. Protects against DOS attacks, etc.
*/
const cors = require('cors');
app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/*
    In post http requests, the data is returned in the body of the response.
    BodyParser allows for us to parse the returned data easily,
    in json in this case
*/

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const bookSchema = new mongoose.Schema({
  title:String,
  year:String,
  poster:String
});

const bookModel = new mongoose.model('mybooks',bookSchema);

app.get('/api/books', async (req, res) => {
    const books = await bookModel.find({});
    res.status(200).json({books})
});

app.get('/api/book/:id', async (req ,res)=>{
  const book = await bookModel.findById(req.params.id);
  res.json(book);
})

app.post('/api/books',async (req, res)=>{
    /*
        The bodyParser middleware allows for access to the body of a post.
        This is necessary because unlike the get method, data
        is returned in the body, and not the URL.
    */
   console.log("Looking for books");
    console.log(req.body.title);
    const {title, year, poster} = req.body;

    const newBook = new bookModel({title, year, poster});
    await newBook.save();

    res.status(201).json({"message":"Book Added!",Book:newBook});
})

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.SERVER_PORT}`);
});

// Fetches the specific book's info.
// Takes updated details from req.body 
// and updates the book in the DB.
// returns updated book to confirm the change.

app.get('/api/book/:id', async (req, res) => {
  let book = await bookModel.findById({ _id: req.params.id });
  res.send(book);
});

// Updates the  specific book's info.
// User submits the edited data.
// Route takes the updated details from req.body.
// Updates the book in the DB.
// Returns updated book to confirm the change
app.put('/api/book/:id', async (req, res) => {
  let book = await bookModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(book);
});
