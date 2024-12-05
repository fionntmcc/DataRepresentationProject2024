// necessary inputs
// Provides linking to other app routes.
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
//import { Buffer } from "buffer";

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
        <Col xs={12} sm={6} md={6} className="mb-4 px-4">
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
                            <img style={{
                                maxWidth: "50%",
                                height: "auto",
                                marginBottom: "10px",
                            }} src={props.myBook.poster} alt={props.myBook.title} />
                        </div>
                    </blockquote>
                </Card.Body>
                <Card.Footer>
                    <div className="d-flex justify-content-between">
                        <Link to={"/read/" + props.myBook._id}>
                            <Button variant="primary">Read</Button>
                        </Link>
                        <Link to={"/update/" + props.myBook._id}>
                            <Button variant="warning">Update</Button>
                        </Link>
                        <Button variant="danger" onClick={handleDelete}>Delete</Button>
                    </div>
                </Card.Footer>
            </Card>
        </Col>

    );
}

export default BookItem;