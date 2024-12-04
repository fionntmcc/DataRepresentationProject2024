import { useState } from "react";
import axios from "axios";

// Reusable read component
const Write = () => {

  // useState() is a hook in React that allows you to add 
  // state variables to functional components.
  // This allows for the management of state outside of classes.

  // How to use useState():

  // const [state, setState] = useState(initialValue);
  // state : The value that can be used in the component
  // setState() : Updates the value
  // initialValue : sets value on init

  // Declare useState() for each value
  const [title, setTitle,] = useState("");
  const [year, setYear] = useState("");
  const [poster, setPoster] = useState("");
  const [text, setText] = useState("");

  // handle botton click, log book details and post book to server
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(`Title: ${title}, Year: ${year}, Poster: ${poster}`, `Text: ${text}`);

    const book = {
      title: title,
      year: year,
      poster: poster,
      text: text,
    };

    // Post created book to server, retrieve response from server
    axios.post('http://localhost:4000/api/books', book)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.data));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>

        {/* Input box to change book value */}
        <div className="form-group">
          <label>Add Book Title: </label>
          <input type="text"
            className="form-control"
            value={title}
            onChange={(e) => { setTitle(e.target.value) }}
          />
        </div>

        {/* Input box to change year value */}
        <div>
          <label>Add Book Year: </label>
          <input type="text"
            className="form-control"
            value={year}
            onChange={(e) => { setYear(e.target.value) }}
          />
        </div>

        {/* Input box to change poster value */}
        <div>
          <label>Add Poster URL: </label>
          <input type="text"
            className="form-control"
            value={poster}
            onChange={(e) => { setPoster(e.target.value) }}
          />
        </div>

        {/* Input box to change book value */}
        <div className="form-group">
          <label>Add Book Text: </label>
          <input type="text"
            className="form-control"
            value={text}
            onChange={(e) => { setText(e.target.value) }}
          />
        </div>

        {/* Submit button - runs handleSubmit() */}
        <div>
          <input type="submit" value="Add Book" />
        </div>


      </form>
    </div>
  )
};

export default Write;