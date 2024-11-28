import { useEffect, useState } from "react";
import axios from "axios";
import Books from "./Books";

// Reusable read component

const Read = () => {

  // store books as JSON
  const [books, setBooks] = useState([]); // initialise books to null array
  const book_id = 1;

  useEffect(() => {
    
    axios.get('http://localhost:4000/api/books/book_id}')
      .then((response) => {
        console.log(response.data);
        setBooks(response.data.books);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    // return book list
    <div>
        {/* display books */}
      <Books myBooks={books} />
    </div>
    );
  };
  
  export default Read;