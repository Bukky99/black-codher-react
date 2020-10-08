import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
    //let let {id, volumeInfo: {title, authors, description}, saleInfo:{listPrice: {amount}}} = book;
    const info = props.book.volumeInfo;
    const {id, volumeInfo: {title, authors, description, imageLinks: { thumbnail}}} = props.book;

    const renderAmount = () => {
        if (props.book.saleInfo && props.book.saleInfo.listPrice && props.book.saleInfo.listPrice.amount)
        {
        return '£' + props.book.saleInfo.listPrice.amount;
        }
        return;
    }

    const renderAuthors = () => {
        if(authors.length === 1) {
            return authors;
        }
        return authors.map(author => author + ', ');
        }

        function addBook(title) {
            console.log(`The Book ${title} was clicked`);

            }

 return (
 <div>
     <img src={thumbnail} />
    <h2>{title} - {renderAuthors()} </h2>
    <p>{renderAmount()}</p>
    <p>{description}</p>
    <button onClick={() => props.addBook(title)}>Remove - </button>
 </div>

 );
}


Book.propTypes = {
    book: PropTypes.shape({
        volumeInfo: PropTypes.shape ({
            title: PropTypes.string.isRequired,
            authors: PropTypes.array.isRequired,
            description: PropTypes.string.isRequired,
            imageLinks: PropTypes.shape({
                thumbnail: PropTypes.string.isRequired
            })
        }),
        saleInfo: PropTypes.shape({
            listPrice: PropTypes.shape({
                amount: PropTypes.number.isRequired
            }).isRequired
            
        })
    })
};

Book.defultProps = {
    title: 'This is the Title'
};

export default Book;
