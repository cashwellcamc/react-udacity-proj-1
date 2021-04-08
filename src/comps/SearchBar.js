import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    value: '',
  };
  handleChange = event => {
    const val = event.target.value;
    this.setState({ value: val }, () => {

      if (val.length && val.length >= 1) {
        this.props.onSearch(val);
      }

    });
  };
  render() {
    return (
      <div className="search-books-input-wrapper">
        <input
          type="text"
          value={this.state.value}
          placeholder="Search by title or author"
          onChange={this.handleChange}
          autoFocus
        />
      </div>
    );
  }
}

export default SearchBar;
