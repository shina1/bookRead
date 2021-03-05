import React, { Component } from "react";
import CloseSearch from "./CloseSearch";
import SearchInput from "./SearchInput";

export class SearchBar extends Component {
  render() {
    const { onResetSearch, onSearch } = this.props;
    return (
      <div className="search-books-bar">
        <CloseSearch onResetSearch={onResetSearch} />
        <SearchInput onSearch={onSearch} />
      </div>
    );
  }
}

export default SearchBar;
