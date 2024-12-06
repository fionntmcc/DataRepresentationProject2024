import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from "react";
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
    axios.get(`http://localhost:4000/api/book${localStorage.getItem("activeBook")}`)
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
    // debug - log books to console whenever props mount
    // or update
    console.log("Books:", props.myBooks);
}, [props.myBooks]);

// Checks if image was uploaded,
// if so, convert to base64
// else, use default image URL
const posterUrl = props.myBook.posterImg
    ? `data:${props.myBook.posterImg.contentType};base64,${Buffer.from(
        props.myBook.posterImg.data).toString("base64")}`
    : props.myBook.poster;

    return (
      <Card className={`h-100 p-3`}>
                <Card.Header style={
                    {
                        backgroundColor: "#f8f9fa",
                        textAlign: "center",
                        fontSize: "1.5em",
                    }
                }>{props.myBook.title}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <div className="d-flex justify-content-center">
                            {posterUrl && (
                                <div className="d-flex justify-content-center">
                                    <img
                                        src={posterUrl}
                                        alt={props.myBook.title}
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
                        <Link to={"/read/" + props.myBook._id}>
                            <Button variant="primary">Read</Button>
                        </Link>
                    </div>
                </Card.Footer>
            </Card>
    );
  };
  
  export default Home;