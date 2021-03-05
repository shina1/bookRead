import React, { Component } from "react";
import SearchBar from "./SearchBar";
import SearchBooksResults from "./SearchBooksResults";
class SearchPage extends Component {
  render() {
    const {
      myBooks,
      SearchBooks,
      onSearch,
      onMove,
      onResetSearch,
    } = this.props;
    // console.log(SearchBooks);
    return (
      <div className="search-books">
        <SearchBar onSearch={onSearch} onResetSearch={onResetSearch} />
        <SearchBooksResults
          SearchBooks={SearchBooks}
          myBooks={myBooks}
          onMove={onMove}
        />
      </div>
    );
  }
}

export default SearchPage;
