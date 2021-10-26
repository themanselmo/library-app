import BookContainer from "./BookContainer"

const Overview = ({ rentedBooks, recommendedBooks}) => {
    return (
        <>
            {/* container for recommended books */}
            <BookContainer books={recommendedBooks}/>
            {/* container for rented books */}
            <BookContainer books={rentedBooks}/>
        </>
    )
}

export default Overview