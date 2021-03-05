import React, { Component } from "react";
import Books from "./BooksComponent";

export class Shelfs extends Component {
  render() {
    const { shelf, myBooks, onMove } = this.props;

    const booksOnShelf = myBooks.filter((book) => book.shelf === shelf.key);

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelf.name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {booksOnShelf.map((book) => (
              <Books
                key={book.id}
                book={book}
                shelf={shelf.key}
                onMove={onMove}
              />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Shelfs;
