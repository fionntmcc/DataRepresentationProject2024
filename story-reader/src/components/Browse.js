
// necessary imports
import Books from "./Books";
import { useEffect, useState } from "react";
import axios from "axios";

const Browse = () => {

  // store books as JSON
  const [books, setBooks] = useState([]); // initialise books to null array

  useEffect(() => {
    
    axios.get('http://localhost:4000/api/books')
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
}

export default Browse;

// useEffect() method to get books from API
    /*
    useEffect(
        () => {
            axios.get("https://jsonblob.com/api/jsonblob/1311482858984103936") // gets from given API
            .then((response) => {
                console.log(response.data); // logs api response
                setBooks(response.data.books) // sets Books using useState()
            })
            .catch(
                (error) => { // handle errors
                    console.log(error); 
                }
            )
        }, [] // only runs on init
    );
    */