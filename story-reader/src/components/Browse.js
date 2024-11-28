// necessary imports
import React, { useEffect, useState } from "react";
import Books from "./Books";
import axios from "axios";
import { useActionData } from "react-router-dom";

// Reusable read component
const Read = () => {

    // constant to store books as JSON
    const [books, setBooks] = useState([]); // initialise books to null array

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

    useEffect(
        () => {
            axios.get("http://localhost:4000/api/books") // gets from given API
            .then((response) => {
                console.log(response.data); // logs api response
                setBooks(response.data.myBooks) // sets Books using useState()
            })
            .catch(
                (error) => { // handle errors
                    console.log(error); 
                }
            )
        }, [] // only runs on init
    );
    
    // return message and book list
    return <div>
            {/* display books */}
            <h1>Hello from the Read component</h1>
            <Books myBooks={books} />
        </div>;
}
  
  export default Browse;