// library imports
import React, { useState, useEffect } from 'react';
import {Route, Switch} from "react-router-dom"
import styled from 'styled-components'

// components
import Header from  './Header'
import Nav from './Nav'
import Overview from './Overview';
import Search from './Search';
import Donate from './Donate';
import Return from './Return';

function App() {
  
  // URL's for fetch requests
  const bookURL = 'http://localhost:3000/books'
  const userListURL = 'http://localhost:3000/userList'

  // state variables
  const [books, setBooks] = useState([])
  const [rentedBooks, setRentedBooks] = useState([])
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    image: '',
    genre: '',
    checkedOut: false
  })

  const recommendedBooks = [
    {
        "title": "Lord Of The Rings",
        "author": "J.R.R Tolkien",
        "image": "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.collider.com%2Fwp-content%2Fuploads%2F2016%2F07%2Fthe-lord-of-the-rings-book-cover.jpg&f=1&nofb=1",
        "genre": "fiction",
        "checkedOut": false,
        "id": 1
      },
      {
        "title": "Harry Potter and the Philosopher's Stone",
        "author": "J.K. Rowling",
        "image": "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fd.ibtimes.co.uk%2Fen%2Ffull%2F1541432%2Fharry-potter-philosophers-stone.jpg&f=1&nofb=1",
        "genre": "fiction",
        "checkedOut": false,
        "id": 2
      },
      {
        "title": "Eloquent JavaScript",
        "author": "Manjin Haverbeke",
        "image": "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F3.bp.blogspot.com%2F-um47FqTbvPg%2FVh0a-qERKYI%2FAAAAAAAAD9M%2FAemef2DnUe0%2Fs1600%2FEloquent%2BJavaScript%2BFree%2BBook.png&f=1&nofb=1",
        "genre": "textbook",
        "checkedOut": false,
        "id": 3
      },
      {
        "title": "JavaScript Patterns",
        "author": "Stoyan Stefanov",
        "image": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F3.bp.blogspot.com%2F-ZB_AAD_1tiI%2FWKzhO9JKceI%2FAAAAAAAAH_c%2FElUSkJDNXDUDXEMPmpYuCWwy_jJBR0lUwCEw%2Fs1600%2Fjsp_javascript_patterns.jpg&f=1&nofb=1",
        "genre": "textbook",
        "checkedOut": false,
        "id": 4
      },
      {
        "title": "Embers Of War",
        "author": "Gareth L. Powell",
        "image": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2FgCX7EZXWnp097mMaNMhVMIsQFlw%3D%2F0x0%3A1181x1800%2F1200x0%2Ffilters%3Afocal(0x0%3A1181x1800)%3Ano_upscale()%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_asset%2Ffile%2F10131869%2FDEC171874.jpg&f=1&nofb=1",
        "genre": "science fiction",
        "checkedOut": false,
        "id": 5
      }
  ]
  const [recommended, setRecommended] = useState(recommendedBooks)
  const [search, setSearch] = useState('')
  
  // hooks
  useEffect(() => {
    fetch(bookURL)
    .then(res => res.json())
    .then(data => {
      setBooks(data)
      console.log(data)
    })
  }, [])

  useEffect(() => {
    fetch(userListURL)
    .then(res => res.json())
    .then(data => setRentedBooks(data))
  }, [])

  // whenever a book is rented, the following function executes

    // fires off a patch request to update the books availability
    // and a post request to add the rented book to the 
    // users list of rented books
  function handleRentBook(book) {
    console.log('book! ', book)

    // updating book in the db
    fetch(`${bookURL}/${book.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
       checkedOut: !book.checkedOut
      })
    })
    .then(res => res.json())
    .then(updatedItem => console.log('updated book: ', updatedItem))

    // adding book to users list
    book.checkedOut = !book.checkedOut
    fetch(userListURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(book)
    })
    .then(res => res.json())
    .then(addedBook => {
      console.log('book added to userList: ', addedBook)
      setRentedBooks([...rentedBooks, addedBook])
    })
  }

  const handleReturnBooks = (deletedBook) => {
    console.log("handling return")
    deletedBook.checkedOut = !deletedBook.checkedOut
    fetch(`${bookURL}/${deletedBook.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        checkedOut: deletedBook.checkedOut
      })
    })
    .then(res => res.json())
    .then(book => {
      const bookIndex = books.findIndex(book => book.id === deletedBook.id)
      console.log(bookIndex)
      let updatedBooks = books.filter(book => book.id != deletedBook.id)
      updatedBooks.splice(bookIndex, 1, deletedBook)
      setBooks(updatedBooks)
    })

    
    fetch(`${userListURL}/${deletedBook.id}`, {
      method: "DELETE",
    })
    .then(setRentedBooks(rentedBooks.filter(book => book.id != deletedBook.id))
    )
  }
  // whenever the search button is pressed, the search state variable
  // is set to what was input in the textfield
  function handleSearch(e) {
    e.preventDefault()
    console.log(e.target[0].value)
    setSearch(e.target[0].value)
  }


  // filters the books when the search button is pressed,
  // acording to what was entered in the search bar
  // if nothing is in the search bar, all books will be displayed
  const filteredBooks = () => {
    if(search.length > 0) {
      return books.filter(book => book.title.includes(search))
    } else {
      return books
    }
  }

  const generateNonRepeatingNums = () => {
    let randomNums = []
    while(randomNums.length < 5) {
      let num = Math.floor(Math.random() * 5 + 1)
      if(randomNums.indexOf(num) === -1){
        randomNums.push(num)
      }
    }
    console.log(randomNums)
    return randomNums
  }

  const randomBooks = () => {
    if(books.length > 0) {
      return [books[0], books[3], books[2], books[6]]
    } else {
      return []
    }
  }

  // whenever a book is donated through the donation form, 
  // a POST request is made to add the book to the book list in the db,
  // and the book list state is updated
  const HandleDonation = (newBook) => {
      fetch(bookURL,{
        method: "POST",
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(newBook),
      })
      .then(r=>r.json())
      .then(data => {
        setBooks([newBook, ...books])
        setFormData({title:'', author:'', image:'', genre:'',checkedOut:false })
        alert('Thank you for Donating!')
      })
  }


  
  return (
    <Appy className="App">
      <Header />
      <Nav />
      <Route path='/books/search'>
        <Search filteredBooks={filteredBooks()} setSearch={handleSearch} handleRentBook={handleRentBook}/>
      </Route>
      <Route path='/books/new'>
        <Donate HandleDonation={HandleDonation} setFormData={setFormData} formData={formData}/>
      </Route> 
      <Route path='/books/return'>
        <Return books={rentedBooks} handleReturn={handleReturnBooks}/>
      </Route>
      <Route exact path='/'>
        <Overview recommendedBooks={randomBooks()} rentedBooks={rentedBooks} handleRentBook={handleRentBook}/>
      </Route>
    </Appy>
  );
}

export default App;

const Appy = styled.div`
  text-align:center;
`
