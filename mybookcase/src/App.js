import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import data from './models/books.json';
import BookList from './components/BookList';
import Header from './components/Header';

const App = (props) => {

    //useState(data) is the defult value for state, equlas to data (the array of objects in books.json)
 const [books, setBooks] = useState(data);

 function addBook(title) {
   console.log(`The Book ${title} was clicked`);
   {/*const newBooks = books.filter(book =>{
      if(title !== books.volumeInfo.title) {
         return false;
      }
      return true;
   });
setBooks(newBooks)*/}

   }

 {/*if (books.length === 0) {
    return 'No books found';
 }
 return (
    <div>
        <BookList books = {books} addBook = {addBook} />
    </div>
 );*/}


return (
<BrowserRouter>
<Route path="/" render={() => (
   <React.Fragment>
      <Header />
      <BookList books={books} addBook={addBook}/>
   </React.Fragment>
)} />
<Route path="/bookcase" render={() => (
   <React.Fragment>
      <Header />
      <BookList books={books} addBook={addBook}/>
   </React.Fragment>
)} />
   
</BrowserRouter>
)
}


export default App;
