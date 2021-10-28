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
    button{
        font-family: Merriweather, serif;
        color:white;
        border-style: inset;
        border-radius: 25px 25px 25px 25px;
        border-color: white;
        background-color: red;
    }
    form input {
        margin: 20px;
        border-style: outset;
        border-radius: 25px 25px 25px 25px;
    }
`