import React from 'react';
import Header from  './Header'
import Nav from './Nav'
import Overview from './Overview';

function App() {
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
      <Overview rentedBooks={mockBooks}/>
    </div>
  );
}

export default App;
