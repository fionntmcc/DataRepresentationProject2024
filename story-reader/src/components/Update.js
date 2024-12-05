
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

export default function Update() {
  let { id } = useParams();
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [poster, setPoster] = useState("");
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
            setTitle(response.data.title);
            setYear(response.data.year);
            setPoster(response.data.poster);
            setText(response.data.text);
        })
        .catch((error) => {
            console.log(error);
        });
}, [id]);

// post put new book with user details to DB.
// Then, log response from server,
// and navigate back to Read page
const handleSubmit = (event) => {
    event.preventDefault();
    const newBook = { id, title, year, poster, text };
    axios.put('http://localhost:4000/api/book/' + id, newBook)
        .then((res) => {
            console.log(res.data);
            navigate('/browse');
        });
}

return (
    <div>
        {/* For new book details input */}
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Book Title: </label>
                <input type="text" 
                className="form-control" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Release Year: </label>
                <input type="text" 
                className="form-control" 
                value={year} 
                onChange={(e) => setYear(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Poster URL: </label>
                <input type="text" 
                className="form-control" 
                value={poster} 
                onChange={(e) => setPoster(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Release Text: </label>
                <input type="text" 
                className="form-control" 
                value={text} 
                onChange={(e) => setText(e.target.value)} />
            </div>
            <div className="form-group">
                <input type="submit" value="Update Book" className="btn btn-primary" />
            </div>
        </form>
    </div>
);
}