import React from "react";
import Books from "./Books";

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
    "Text": "https://www.gutenberg.org/files/64317/64317-0.txt",
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
    "Rating": 4.0,
    "Text": "https://www.gutenberg.org/files/507/507-0.txt",
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
    "Text": "https://www.gutenberg.org/files/437/437-0.txt",
  },
];

// return Book list
const Browse = () => {
    return <div>
      <Books myBooks={books}/>
    </div>;
  };
  
  export default Browse;