import BookCard from "./BookCard"

const BookContainer = ({ books }) => {

    function checkForEmptyBooks(books) {
        if(books.length > 0) {
            return books.map(book => <BookCard key={book.id} book={book}/>)
        } else {
            return <p>Empty</p>
        }
    }

    return (
        <div>
           {checkForEmptyBooks(books)} 
        </div>
    )
}

export default BookContainer