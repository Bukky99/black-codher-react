import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import books from './books.json';

const formatter = new Intl.NumberFormat('en-GB', {
 style: 'currency',
 currency: 'GBP'
})

const book = books[0];
let {id, volumeInfo: {title, authors, description}, saleInfo: {listPrice: {amount}}} = book;

const renderList =() => {
  const list =[];
  for(let i = 0; i < 15; i++) {
    let {id, volumeInfo: {title, authors, description, imageLinks}} = books[i];
    list.push(<li id={books[i].id}>{title} - {authors.map(author => (author))}
    {imageLinks && imageLinks.smallThumbnail && <img src = {imageLinks.smallThumbnail} />
    }</li>);
  
  } 
    return list;

  } 

const element = <Fragment>
 {<h1 id={id}>{title} = {formatter.format(amount)}</h1>}
 <ul>
  {renderList()}
 </ul>

   
   
</Fragment>;

ReactDOM.render(element,document.getElementById('root'));
