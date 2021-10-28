import { useState } from 'react'
import styled from 'styled-components'

import BookContainer from './BookContainer'

const Search = ({ filteredBooks, setSearch, handleRentBook }) => {
   


    return (
        <SearchContainer>
            <form onSubmit={setSearch}>
                <label>Search by Book Title or Genre</label>
                <input type='text'></input>
                <button>Submit</button>
            </form>
            <BookContainer books={filteredBooks} handleRentBook={handleRentBook}/>
        </SearchContainer>
    )
}

export default Search

const SearchContainer = styled.div`
   

    form input {
        margin: 20px;
        
    }
`