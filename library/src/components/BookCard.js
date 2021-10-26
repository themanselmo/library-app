

function BookCard({book, book:{image,title,author,genre}}) {
    
    return(
        
        <div id="card">
            <h3>{title}</h3>
            <h4>{author}</h4>
            <h4>{genre}</h4>
        </div>

    )
}
export default BookCard