import React, { Component } from "react";
//import { Route, Link } from "react-router-dom";
import BookContainer from "./BookContainer";
import OpenSearch from "./OpenSearch";

class BookListPage extends Component {
  render() {
    const { bookShelfs, myBooks, onMove } = this.props;

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <BookContainer
          bookShelfs={bookShelfs}
          myBooks={myBooks}
          onMove={onMove}
        />
        {/* open-search component */}
        <OpenSearch />
      </div>
    );
  }
}

export default BookListPage;
