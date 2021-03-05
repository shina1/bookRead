import React, { Component } from "react";
import Book from "./BooksComponent";

export class SearchBooksResults extends Component {
  render() {
    const { SearchBooks, myBooks, onMove } = this.props;
    const updatedBooks = SearchBooks.map((book) => {
      myBooks.map((el) => {
        if (el.id === book.id) {
          book.shelf = el.shelf;
        }
        return el;
      });
      return book;
    });
    return (
      <div className="search-books-results">
        <ol className="books-grid">
          {updatedBooks.map((book) => (
            <Book
              key={book.id}
              book={book}
              shelf={book.shelf ? book.shelf : "none"}
              onMove={onMove}
            />
          ))}
        </ol>
      </div>
    );
  }
}

export default SearchBooksResults;
