import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Card from "react-bootstrap/Card";
import { Buffer } from "buffer";
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {

  // store book as JSON
  const [book, setBook] = useState([]); // initialise books to null

  // axios get request to get active book from database
  function Reload() {
    console.log("Reloading book");
    const activeBook = localStorage.getItem("activeBook");
    console.log(activeBook);
    if (activeBook !== null) {
      axios.get(`http://localhost:4000/api/book/${localStorage.getItem("activeBook")}`)
        .then((response) => {
          // log response
          console.log(response.data);
          setBook(response.data);
        })
        .catch((error) => {
          console.log("Error loading book: ", error);
        });
    } else {
      axios.get(`http://localhost:4000/api/random/book`)
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
  }, []);

  // Checks if image was uploaded,
  // if so, convert to base64
  // else, use default image URL
  const posterUrl = book.posterImg
    ? `data:${book.posterImg.contentType};base64,${Buffer.from(
      book.posterImg.data).toString("base64")}`
    : book.poster;

  if (book === null) {
    return <div>Loading...</div>;
  }
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100 container-fluid"
          src={posterUrl}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Continue with your active book</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={posterUrl}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={posterUrl}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Home;