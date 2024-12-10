// necessary imports
import Books from "./Books";
import { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

const Browse = () => {

  // store books as JSON
  const [books, setBooks] = useState([]); // initialise books to null array
  const [searchQuery, setSearchQuery] = useState(""); // state for search query
  const [filterBy, setFilterBy] = useState("title"); // state for filter criteria

  // axios get request to get books from database
  function Reload() {
    console.log("Reloading books");
    axios.get('http://localhost:4000/api/books')
      .then((response) => {
        // log response
        console.log(response.data.books);
        setBooks(response.data.books);
      })
      .catch((error) => {
        console.log("Error loading books: ", error);
      });
  };

  // reload books on init and whenever searchQuery or filterBy changes
  useEffect(() => {
    console.log("active book", localStorage.getItem("activeBook"));
    Reload();
  }, [searchQuery, filterBy]);

  var filteredBooks = books;
  // filter books based on search query and filter criteria
  if (filterBy === "title") {
    filteredBooks = books.filter(book => 
      book.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  } else if (filterBy === "author") {
    filteredBooks = books.filter(book => 
      book.author.toLowerCase().includes(searchQuery.toLowerCase())
    );
  } else if (filterBy === "year") {
    filteredBooks = books.filter(book => 
      book.year.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  return (
    // return book list
    <div>
      <SearchBar setSearchQuery={setSearchQuery} /> {/* pass setSearchQuery to SearchBar */}
      <div>
        <label htmlFor="filterBy">Filter by: </label>
        <select id="filterBy" value={filterBy} onChange={(e) => setFilterBy(e.target.value)}>
          <option value="title">Title</option>
          <option value="author">Author</option>
        </select>
      </div>
      <div>{searchQuery}</div>
      {/* display filtered books */}
      <Books myBooks={filteredBooks} ReloadData={Reload} />
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