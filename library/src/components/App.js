import React, { useState, useEffect } from 'react';
import {Route, Switch} from "react-router-dom"

import Header from  './Header'
import Nav from './Nav'
import Overview from './Overview';
import Search from './Search';
import Donate from './Donate';

function App() {

  const [books, setBooks] = useState([])
  const [rentedBooks, setRentedBooks] = useState([])
  const [formData,setFormData] = useState([])
  const [recommended, setRecommended] = useState([])
  const [search, setSearch] = useState('')
  
  useEffect(() => {
    fetch('http://localhost:3000/books')
    .then(res => res.json())
    .then(data => setBooks(data))
  }, [])

  useEffect(() => {
    fetch('http://localhost:3000/userList')
    .then(res => res.json())
    .then(data => setRentedBooks(data))
  }, [])


  function handleSearch(e) {
    e.preventDefault()
    console.log(e.target[0].value)
    setSearch(e.target[0].value)
  }

  const filteredBooks = () => {
    if(search.length > 0) {
      return books.filter(book => book.title.includes(search))
    } else {
      return books
    }
  }

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


  const HandleDonation = (newBook) => {
      fetch('http://localhost:3000/books',{
        method: "POST",
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(newBook),
      })
      .then(r=>r.json())
      .then(data => {
        setBooks([newBook, ...books])
        setFormData({title:'', author:'', image:'', genre:'',checkedOut:false })
      })
      return <alert>Thank you donating!</alert>
  }

  return (
    <div className="App">
      <Header />
      <Nav />
      <Route path='/books/search'>
        <Search filteredBooks={filteredBooks()} setSearch={handleSearch}/>
      </Route>
      <Route path='/books/new'>
        <Donate HandleDonation={HandleDonation}/>
      </Route> 
      <Route exact path='/'>
        <Overview recommendedBooks={recommendedBooks} rentedBooks={rentedBooks}/>
      </Route>
    </div>
  );
}

export default App;
