import React, { useState, useEffect } from 'react';
import Header from  './Header'
import Nav from './Nav'
import Overview from './Overview';

function App() {

  const [books, setBooks] = useState([])
  const [rentedBooks, setRentedBooks] = useState([])
  const [recommended, setRecommended] = useState([])

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

  const mockBooks = [
    {
      title: "test title",
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.ihVko-MgBxWTIaDy1jeo0AHaE7%26pid%3DApi&f=1",
      author: "mr test"
    }
  ]
  return (
    <div className="App">
      <Header />
      <Nav />
      <Overview recommendedBooks={mockBooks} rentedBooks={rentedBooks}/>
    </div>
  );
}

export default App;
