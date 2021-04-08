import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';

class AllBooks extends Component {
  render() {
    const { bookshelves, books, onMove } = this.props;
    return (
      <div className="list-books">
        <div className="listed-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {bookshelves.map(shelf => (
              <BookShelf
                key={shelf.key}
                shelf={shelf}
                books={books}
                onMove={onMove}
              />
            ))}
          </div>
        </div>
        <div className="search-push">
          <Link to="search">
            <button>Add a Book!</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default AllBooks;
