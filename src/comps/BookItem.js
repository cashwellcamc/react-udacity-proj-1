import React from 'react';
import ShelfToggle from './ShelfToggle';

const BookItem = ({ book, shelf, onMove }) => (
  <li>
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${
              book.imageLinks
                ? book.imageLinks.thumbnail
                : 'icons/book-placeholder.svg'
            })`
          }}
        />
        <ShelfToggle book={book} shelf={shelf} onMove={onMove} />
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">
        {book.authors ? book.authors.join(', ') : '404 Not Found'}
      </div>
    </div>
  </li>
);

export default BookItem;
