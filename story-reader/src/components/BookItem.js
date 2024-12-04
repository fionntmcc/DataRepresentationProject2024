// necessary inputs
// Provides linking to other app routes.
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const BookItem = (props) => {

    // useEffect() functions handle side effects caused by anything
    // that may be outside of scope of the function such as
    // fetching data, subscriptions etc.

    // useEffect() runs after the renderer by default.
    // If no dependency is provided, it will execute after
    // every render cycle.

    // If you provide a dependency array as the second argument,
    // useEffect() will only run when the given argument's
    // values update.

    // useEffect() can also return a cleanup function, such as:

    /*
        useEffect(() => {
        const subscription = someAPICall();
  
        return () => {
            subscription.unsubscribe(); // Cleanup when component unmounts
        };
        }, []);
    */

    // This is useful for resetting state and cleaning up subscription calls.

    // handler calls axios.delete to delete the book
    const handleDelete = (e) => {
        e.preventDefault();
        //console.log("props" + props.myBook._id);
        axios.delete('http://localhost:4000/api/book/' + props.myBook._id)
            .then(() => {
                // reload books
                props.Reload();
            })
            .catch((error) => {
                console.error("Error deleting book:", error);
            });
    }


    useEffect(() => {
        // debug - log books to console whenever props mount
        // or update
        console.log("Books:", props.myBooks);
    }, [props.myBooks]);

    // return book information for BookItem
    return (
        <div>
            {/*card for stylized list*/}
            <Link to={"/read/" + props.myBook._id} >
                <Card>
                    <Card.Header>
                        {props.myBook.title}
                    </Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={props.myBook.poster} alt={props.myBook.title} />
                            <footer>{props.myBook.year}</footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </Link>
            {/* Button to delete the book */}
            <Button variant="danger" onClick={handleDelete}
            >Delete</Button>
            <Link to={"/read/" + props.myBook._id} >
                <Button>Read</Button>
            </Link>
            <Link to={"/update/" + props.myBook._id} >
                <Button variant='secondary'>Update Book</Button>
            </Link>
        </div>
    );
}

export default BookItem;