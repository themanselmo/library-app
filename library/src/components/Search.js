
import { useState } from 'react'

import BookContainer from './BookContainer'

const Search = ({ filteredBooks, setSearch, handleRentBook }) => {
   


    return (
        <div>
            <form onSubmit={setSearch}>
                <label>Search by Book Title</label>
                <input type='text'></input>
                <button>Submit</button>
            </form>
            <BookContainer books={filteredBooks} handleRentBook={handleRentBook}/>
        </div>
    )
}

export default Search