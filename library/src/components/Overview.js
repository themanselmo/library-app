import BookContainer from "./BookContainer"
const Overview = ({ rentedBooks }) => {
    return (
        <>
            {/* container for recommended books */}
            <BookContainer books={rentedBooks}/>
            {/* container for rented books */}
            <BookContainer books={rentedBooks}/>
        </>
    )
}

export default Overview