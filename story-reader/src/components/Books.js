// necessary inputs
import BookItem from "./BookItem";

// Books holds list of Book objects
const Books = (props) => {
    // build list of BookItems for displaying as html code
    return (
        <> 
            {/* 
                Map the books array to BookItem.
                Reload book data whem the Reload button is clicked. 
            */}
            {props.myBooks.map((book) => (
                <BookItem
                    myBook={book}
                    key={book._id}
                    Reload={props.ReloadData}
                />
            ))}
        </>
    );
}

export default Books;