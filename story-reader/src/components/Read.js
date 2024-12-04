import React, { useMemo, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Badge, Button, ButtonGroup } from 'react-bootstrap';
import TabBar from './TabBar.js';

export default function Read() {
  let { id } = useParams();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");
  const [pageText, setPageText] = useState("");
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const PAGE_SIZE = 150;

  useEffect(() => {
    axios.get('http://localhost:4000/api/book/' + id)
      .then((response) => {
        console.log(response.data);
        console.log(response.data.text);
        setTitle(response.data.title);
        setAuthor(response.data.year);
        setText(response.data.text.split(" "));
        console.log(text);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  useEffect(() => {
    setPageText(getPage(page));
  }, [page, text]);

  function getPage(page) {
    var pageText = "";
    var i = (page - 1) * PAGE_SIZE;
    while (i < page * PAGE_SIZE && i < text.length) {
      pageText += text[i] + " ";
      i++;
    }
    return pageText;
  }

  function prevPage() {
    console.log("prevPage");
    if (page > 1) {
      setPage(page - 1);
    }
  }

  function nextPage() {
    console.log("nextPage");
    if (page < Math.ceil(text.length / PAGE_SIZE)) {
      setPage(page + 1);
    }
  }

  return (
    <div>
      <h1>{title} <Badge bg="secondary">New</Badge></h1>
      <h4>by {author}</h4>
      <p className="center-text">{pageText}</p>

      <ButtonGroup aria-label="Basic example">
        <Button variant="secondary" onClick={prevPage}>Previous</Button>
        <Button variant="secondary">huh</Button>
        <Button variant="secondary" onClick={nextPage}>Next</Button>
      </ButtonGroup>

      <TabBar />
    </div>
  );
}