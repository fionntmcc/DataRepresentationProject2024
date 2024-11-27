// necessary inputs
import BookItem from "./MovieItem";

// Books holds list of Book objects
const Books = (props) => {
    // build list of BookItems for displaying as html code
    return props.myBooks.map(
        (book) => {
            // give key to identify individual BookItem 
            return <BookItem myBook={book} key={book.id}/>
        }
    );
}

export default Books;