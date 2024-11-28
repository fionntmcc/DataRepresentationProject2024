
/*

/*
    Express.js allows for easy creation of a server that 
    handles routes and uses URL params
*/
const express = require('express');

const app = express();

const port = 4000; // port for website

const cors = require('cors');
app.use(cors());
const Book = require('./models/Book');

/* 
    cors is a middleware that defines what a ips are allowed to communicate
    with the server. Protects against DOS attacks, etc.
*/
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
const MONGO_URI = 'mongodb+srv://admin:admin@merndb.3xcyk.mongodb.net/?retryWrites=true&w=majority&appName=MernDB';

mongoose.connect(MONGO_URI)
.then(() => {
    console.log('Connected to Mongodb');
}).catch((err) => {
    console.error("Error connecting to MongoDB: ", err);
});

// Insert books into the database
const books = [
    { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 }
  ];

  

  // Insert multiple documents (books) into the collection
Book.insertMany(books)
.then(() => {
  console.log('Books inserted successfully');
  mongoose.connection.close(); // Close the connection after insertion
})
.catch((err) => {
  console.error('Error inserting books:', err);
  mongoose.connection.close(); // Close the connection on error
});

app.get('/', (req, res) => {
    res.send('API is running....'); 
});

app.get('/api/books', async (req, res) => {
    const books = await bookModel.find();
    res.status(200).json({books});
});

app.get('/api/book/:id', async (req ,res)=>{
  const book = await bookModel.findById(req.params.id);
  res.json(book);
})

app.post('/api/books',async (req, res)=>{
    console.log(req.body.title);
    const {Title, Tear, Poster} = req.body;

    const newBook = new bookModel({title, year, poster});
    await newBook.save();

    res.status(201).json({"message":"Book Added!",Book:newBook});
});

/*
    The bodyParser allows for access to the body of a post.
    This is necessary because unlike the get method, data
    is returned in the body, and not the URL.
*/

const path = require('path');
const { stringify } = require('querystring');

//app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

// return status code 500 if there is an error in gets / posts
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

/*
// return books as JSON
app.get("/api/books", (req, res) => {
    // app returns back JSON on books
    const books = [
        {
            "Title": "The Great Gatsby",
            "Author": "F. Scott Fitzgerald",
            "id": "1",
            "isFavorite": false,
            "Year": 1925,
            "Genre": "Fiction",
            "Poster": "https://th.bing.com/th/id/OIP.fFaX7nKq5_5gf2nSI3QEUgHaLK?w=186&h=280&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            "Summary": "The story of the mysteriously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when The New York Times noted 'gin was the national drink",
            "Rating": 4.5,
            "Text": "https://www.gutenberg.org/files/64317/64317-0.txt"
        },
        {
            "Title": "The Catcher in the Rye",
            "Author": "J.D. Salinger",
            "id": "2",
            "isFavorite": false,
            "Year": 1951,
            "Genre": "Fiction",
            "Poster": "https://th.bing.com/th?id=OIP.ZesfpsZfOMGuCiE2Rn5m6QHaLH&w=204&h=306&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
            "Summary": "The story of Holden Caulfield, a teenager at a prep school in New York City, and his many encounters with friends and strangers",
            "Rating": 4,
            "Text": "https://www.gutenberg.org/files/507/507-0.txt"
        },
        {
            "Title": "To Kill a Mockingbird",
            "Author": "Harper Lee",
            "id": "3",
            "isFavorite": false,
            "Year": 1960,
            "Genre": "Fiction",
            "Poster": "https://th.bing.com/th/id/OIP.jvYLjJvwkKBnI2svjjyKigHaLI?w=186&h=280&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            "Rating": 4.5,
            "Text": "https://www.gutenberg.org/files/437/437-0.txt"
        }
    ];


      // post response to client about added book
      app.post("/api/books", (req, res) => {
        res.send("Book added!")
      });

    // status ok
    res.status(200).json({ myBooks: books });

});
*/

// log port to console
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});