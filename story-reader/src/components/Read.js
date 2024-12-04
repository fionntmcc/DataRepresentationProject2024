
import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Badge, Button, ButtonGroup } from 'react-bootstrap';
import TabBar from './TabBar.js';



// useNavigate is a hook provided by React Router.
// it returns a function that enables navigation
// to different routes.
// One user submits the updated book data,
// the update is saved and useNavigate is called
// to redirect to the Read page.
import { useNavigate } from "react-router-dom";
import { get } from 'mongoose';

export default function Read() {
  let { id } = useParams();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");
  const navigate = useNavigate();

  var page = 1;
  const PAGE_SIZE = 50;

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
        console.log(response.data.text);
        setTitle(response.data.title);
        setAuthor(response.data.year);
        setText(response.data.text);
       
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

  function getPage(page) {
    var pageText = "";
    var i = (page - 1) * PAGE_SIZE;
    while (i < page * PAGE_SIZE) {
      pageText += text[i] + " ";
      i++;
    }
    return pageText;
  }

  const pageText = useMemo(() => getPage(page), [page]);

  function getPrevPage() {
    if (page > 1) {
      page--;
    }
    console.log(page);
  }

  function getNextPage() {
    if (page < text.length / PAGE_SIZE) {
      page++;
    }
    console.log(page);
  }


  return (
    <div>
      <h1>{title} <Badge bg="secondary">New</Badge></h1>
      <h4>by {author}</h4>
      <p className="center-text">{text}</p>

      <ButtonGroup aria-label="Basic example">
      <Button variant="secondary" onClick={getPrevPage}>Previous</Button>
      <Button variant="secondary">{page}</Button>
      <Button variant="secondary" onClick={getNextPage}>Next</Button>
    </ButtonGroup>

    <TabBar />
    </div>
  );
}