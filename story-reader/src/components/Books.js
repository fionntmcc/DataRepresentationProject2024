// necessary inputs
import BookItem from "./BookItem";

// Books holds list of Book objects
const Books = (props) => {
    // build list of BookItems for displaying as html code
    return props.myBooks.map(
        (book) => {
            // give key to identify individual BookItem 
            return <BookItem myBook={book} key={book._id}/>
        }
    );
}

export default Books;