import ReturnBookCard from "./ReturnBookCard"
import styled from 'styled-components'

const ReturnBookContainer = ({ books, handleReturn }) => {

    function checkForEmptyBooks(books) {
        if(books.length > 0) {
            console.log(books)
            return books.map(book => <ReturnBookCard key={book.id} book={book} handleReturnBook={handleReturn}/>)
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

export default ReturnBookContainer

const BookContainerContainer = styled.div `
    /* position: absolute; */
    display:flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    `