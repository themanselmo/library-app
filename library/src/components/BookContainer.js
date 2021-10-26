import BookCard from "./BookCard"

const BookContainer = ({ books }) => {
    return (
        <div>
           {books.map(book => <BookCard key={book.id} book={book}/>)} 
        </div>
    )
}

export default BookContainer