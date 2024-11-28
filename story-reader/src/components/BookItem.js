// necessary inputs
// Provides linking to other app routes.
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import Card from "react-bootstrap/Card";

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

    
    useEffect(() => {
        // debug - log movies to console whenever props mount
        // or update
        console.log("Books:", props.myBooks);
      }, [props.myBooks]);
    
    // return movie information for MovieItem
    return(
        <div>   
            {/*card for stylized list*/}
            <Link to={"/read/" + props.myBook._id} >
                <Card>
                <Card.Header>
                    {props.myBook.Title}
                </Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <img src={props.myBook.poster} alt={props.myBook.title}/>
                        <footer>{props.myBook.year}</footer>
                    </blockquote>
                </Card.Body>
                </Card>

            </Link>
            
        </div>
    );
}

export default BookItem;