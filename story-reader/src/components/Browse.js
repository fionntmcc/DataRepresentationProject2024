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
    "Poster": "https://upload.wikimedia.org/wikipedia/en/thumb/4/42/Great_Gatsby_1974.jpg/220px-Great_Gatsby_1974.jpg",
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
    "Poster": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/Rye_catcher.jpg/220px-Rye_catcher.jpg",
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
    "Poster": "https://upload.wikimedia.org/wikipedia/en/thumb/7/79/To_Kill_a_Mockingbird.jpg/220px-To_Kill_a_Mockingbird.jpg",
    "Summary": "The story of a young",
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