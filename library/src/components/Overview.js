import BookContainer from "./BookContainer"

const Overview = ({ rentedBooks, recommendedBooks}) => {
    return (
        <>
            {/* container for recommended books */}
            <h1>Recommended Books:</h1>
            <BookContainer books={recommendedBooks}/>
            {/* container for rented books */}
            <h1>Currently Rented Books:</h1>
            <BookContainer books={rentedBooks}/>
        </>
    )
}

export default Overview