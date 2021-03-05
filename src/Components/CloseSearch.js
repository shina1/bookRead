import React, { Component } from "react";
import { Link } from "react-router-dom";

export class CloseSearch extends Component {
  render() {
    const { onResetSearch } = this.props;
    return (
      <div>
        <Link to="/">
          <button className="close-search" onClick={onResetSearch}>
            Close
          </button>
        </Link>
      </div>
    );
  }
}

export default CloseSearch;
