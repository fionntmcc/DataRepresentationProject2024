import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Card from "react-bootstrap/Card";
import { Buffer } from "buffer";

const Home = () => {

  // store book as JSON
  const [book, setBook] = useState([]); // initialise books to null

  // axios get request to get active book from database
  function Reload() {
    if (
      localStorage.getItem("activeBook") !== null || undefined) {
      console.log("Reloading book");
    axios.get(`http://localhost:4000/api/book/${localStorage.getItem("activeBook")}`)
      .then((response) => {
        // log response
        console.log(response.data);
        setBook(response.data);
      })
      .catch((error) => {
        console.log("Error loading book: ", error);
      });
    }
  };

  useEffect(() => {
    // debug - log books to console whenever book mounts
    // or updates
    Reload();
    console.log("Book:", book);
}, []);

// Checks if image was uploaded,
// if so, convert to base64
// else, use default image URL
const posterUrl = book.posterImg
    ? `data:${book.posterImg.contentType};base64,${Buffer.from(
        book.posterImg.data).toString("base64")}`
    : book.poster;

    return (
      <Card className={`h-100 p-3`}>
                <Card.Header style={
                    {
                        backgroundColor: "#f8f9fa",
                        textAlign: "center",
                        fontSize: "1.5em",
                    }
                }>{book.title}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <div className="d-flex justify-content-center">
                            {posterUrl && (
                                <div className="d-flex justify-content-center">
                                    <img
                                        src={posterUrl}
                                        alt={book.title}
                                        className="img-fluid"
                                        style={{
                                            maxWidth: "50%",
                                            height: "auto",
                                            marginBottom: "10px",
                                        }}
                                    />
                                </div>
                            )}
                        </div>
                    </blockquote>
                </Card.Body>
                <Card.Footer>
                    <div className="d-flex justify-content-between">
                        <Link to={"/read/" + book._id}>
                            <Button variant="primary">Read</Button>
                        </Link>
                    </div>
                </Card.Footer>
            </Card>
    );
  };
  
  export default Home;