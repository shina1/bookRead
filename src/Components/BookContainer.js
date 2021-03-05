import React, { Component } from "react";
import Shelfs from "./Shelfs";

export class BookContainer extends Component {
  render() {
    const { bookShelfs, myBooks, onMove } = this.props;

    return (
      <div className="list-books-content">
        <div>
          {bookShelfs.map((shelf) => (
            <Shelfs
              key={shelf.key}
              shelf={shelf}
              myBooks={myBooks}
              onMove={onMove}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default BookContainer;
