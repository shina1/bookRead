import React, { Component } from "react";
import { Route } from "react-router-dom";
import { debounce } from "throttle-debounce";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import SearchPage from "./Components/SearchPage";
import BookListPage from "./Components/BookListPage";
//import data from "./data";

class BooksApp extends Component {
  bookShelfs = [
    { key: "currentlyReading", name: "Currently Reading" },
    { key: "wantToRead", name: "Want To Read" },
    { key: "read", name: "read" },
  ];
  state = {
    myBooks: [],
    SearchBooks: [],
  };
  componentDidMount = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ myBooks: books });
    });
  };
  // change book shelf
  moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf);
    let updatedBooks = [];
    updatedBooks = this.state.myBooks.filter((el) => el.id !== book.id);
    if (shelf !== "none") {
      book.shelf = shelf;
      updatedBooks = updatedBooks.concat(book);
    }
    this.setState({
      myBooks: updatedBooks,
    });
  };
  // search for book
  SearchBooksFunc = debounce(300, false, (query) => {
    if (query.length > 0) {
      BooksAPI.search(query).then((books) => {
        if (books.error) {
          this.setState({ SearchBooks: [] });
        } else {
          this.setState({ SearchBooks: books });
        }
      });
    } else {
      this.setState({
        SearchBooks: [],
      });
    }
  });
  resetSearch = () => {
    this.setState({ SearchBooks: [] });
  };
  render() {
    const { myBooks, SearchBooks } = this.state;

    return (
      <div className="app">
        {/* search page component */}
        <Route
          exact
          path="/"
          render={() => (
            <BookListPage
              bookShelfs={this.bookShelfs}
              myBooks={myBooks}
              onMove={this.moveBook}
            />
          )}
        />

        {/* booklist component */}
        <Route
          path="/search"
          render={() => (
            <SearchPage
              myBooks={myBooks}
              SearchBooks={SearchBooks}
              onSearch={this.SearchBooksFunc}
              onMove={this.moveBook}
              onResetSearch={this.resetSearch}
            />
          )}
        />
      </div>
    );
  }
}
// app.js ends here
export default BooksApp;
