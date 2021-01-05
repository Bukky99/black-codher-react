import React, {useState} from 'react';

import './BookCounter.css'

//BookCounter us a functional component
const BookCounter = (props) => {

  const [count, setCount] = useState(0);

  return (
    <div className="booklist">
    <h1>{props.library.name}'s Books ({count})	&#8595;</h1>
    <button onClick={() => setCount(count + 1)}>Count Books</button>
      <ul>
        <li>Half of a Yellow Sun</li>
        <li>Black Leopard, Red Wolf</li>
        <li>Born a Crime</li>
        <li>Americanah</li>
        <li>Ghana Must Go</li>
      </ul>
    </div>
  );
}
// expoerts the BookCounter making it available to the rest of the project through the import syntax (in index.js line 4)
export default BookCounter;

