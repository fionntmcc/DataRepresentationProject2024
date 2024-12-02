
import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

// useNavigate is a hook provided by React Router.
// it returns a function that enables navigation
// to different routes.
// One user submits the updated book data,
// the update is saved and useNavigate is called
// to redirect to the Read page.
import { useNavigate } from "react-router-dom";

export default function Read() {
  let { id } = useParams();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");
  const navigate = useNavigate();

  // useEffect() is a lifecycle hook that allows us to
  // synchronise with an external system.
  // Allows us to access the params of the current route.
  // With it, we can get the book id.
  // We can retrieve data from the DB.
  // Easy to load and edit for a single book.
  useEffect(() => {
    axios.get('http://localhost:4000/api/book/' + id)
      .then((response) => {
        console.log(response.data);
        setTitle(response.data.title);
        setAuthor(response.data.year);
        setText(response.data.poster);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  // post put new book with user details to DB.
  // Then, log response from server,
  // and navigate back to Read page
  /*
  const handleSubmit = (event) => {
      event.preventDefault();
      const newBook = { id, title, year, poster };
      axios.put('http://localhost:4000/api/book/' + id, newBook)
          .then((res) => {
              console.log(res.data);
              navigate('/read');
          });
  }
  */

  return (
    <div>
      <h1>{title}</h1>
      <h2>{author}</h2>
      <h4>{text}</h4>
    </div>
  );
}