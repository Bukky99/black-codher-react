import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import data from "./models/books.json";
import Header from "./components/Header";
import Search from "./components/Search";
import BookList from "./components/BookList";
import About from "./pages/About";
import "bootstrap/dist/css/bootstrap.min.css";

const App = (props) => {
  //useState(data) is the defult value for state, equlas to data (the array of objects in books.json)
  const [books, setBooks] = useState(data);
  const [keyword, setKeyword] = useState("");
  //const [cart, setCart] =useState([]);

  async function findBooks(value) {
    const results = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${value}&filter=paid-ebooks&print-ty
  pe=books&projection=lite`).then((res) => res.json());
    if (!results.error) {
      setBooks(results.items);
    }
  }

  function addBook(title) {
    console.log(`The Book ${title} was clicked`);
  }

  return (
    <BrowserRouter>
      <Route
        path="/about"
        render={() => (
          <React.Fragment>
            <About />
          </React.Fragment>
        )}
      />

      <Route
        exact
        path="/"
        render={() => (
          <React.Fragment>
            <Header />
            <Search
              findBooks={findBooks}
              keyword={keyword}
              setKeyword={setKeyword}
            />
            <BookList books={books} addBook={addBook} />
          </React.Fragment>
        )}
      />
      <Route
        path="/bookcase"
        render={() => (
          <React.Fragment>
            <Header />
            <BookList books={books} addBook={addBook} />
          </React.Fragment>
        )}
      />
    </BrowserRouter>
  );
};

export default App;
