import React from 'react';
import BookItem from './BookItem';

const SearchRes = props => {
  const { searchBooks, myBooks, onMove } = props;

  const updatedBooks = searchBooks.map(book => {
    myBooks.map(title => {
      (title.id === book.id) ? book.shelf = title.shelf : console.warn('nothing');

      return title;
    });
    return book;
  });
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {updatedBooks.map(book => (
          <BookItem
            key={book.id}
            book={book}
            shelf={book.shelf ? book.shelf : 'none'}
            onMove={onMove}
          />
        ))}
      </ol>
    </div>
  );
};

export default SearchRes;
