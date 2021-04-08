import React, { Component } from 'react';
import SearchRes from './SearchQuery';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

class SearchLibrary extends Component {
  render() {
    const {
      searchBooks,
      myBooks,
      onSearch,
      onResetSearch,
      onMove
    } = this.props;
    return (
      <div className="search-books">
        <div className="search-container">
          <Link to="/">
            <button className="exit-search" onClick={onResetSearch}>
              Exit
            </button>
          </Link>
          <SearchBar onSearch={onSearch} />
        </div>
        <SearchRes
          searchBooks={searchBooks}
          myBooks={myBooks}
          onMove={onMove}
        />
      </div>
    );
  }
}

export default SearchLibrary;
