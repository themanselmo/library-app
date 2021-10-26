import BookContainer from "./BookContainer"

const Overview = ({ rentedBooks, recommendedBooks, handleRentBook }) => {
    return (
        <>
            {/* container for recommended books */}
            <h1>Recommended Books:</h1>
            <BookContainer books={recommendedBooks} handleRentBook={handleRentBook}/>
            {/* container for rented books */}
            <h1>Currently Rented Books:</h1>
            <BookContainer books={rentedBooks} handleRentBook={handleRentBook}/>
        </>
    )
}

export default Overview