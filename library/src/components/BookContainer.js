import BookCard from "./BookCard"
import styled from 'styled-components'

const BookContainer = ({ books }) => {

    function checkForEmptyBooks(books) {
        if(books.length > 0) {
            return books.map(book => <BookCard key={book.id} book={book}/>)
        } else {
            return <p>Empty</p>
        }
    }

    return (
        <BookContainerContainer className="book-container">
           {checkForEmptyBooks(books)} 
        </BookContainerContainer>
    )
}

export default BookContainer

const BookContainerContainer = styled.div `
    display:flex;
    justify-content: space-between;
`