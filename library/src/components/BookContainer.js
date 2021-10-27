import BookCard from "./BookCard"
import styled from 'styled-components'

const BookContainer = ({ books, handleRentBook }) => {

    function checkForEmptyBooks(books) {
        if(books.length > 0) {
            console.log(books)
            return books.map(book => <BookCard key={book.id} book={book} handleRentBook={handleRentBook}/>)
        } else {
            return null 
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
    /* position: absolute; */
    display:flex;
    flex-wrap: wrap;
    grid-gap: 50px;
    justify-content: space-between;
`