import React, { Component } from "react";

export class SearchInput extends Component {
  state = {
    value: "",
  };
  changeEvent = (e) => {
    const val = e.target.value;
    this.setState({ value: val }, () => {
      this.props.onSearch(val);
    });
  };
  render() {
    return (
      <div className="search-books-input-wrapper">
        <input
          type="text"
          placeholder="Search by title or author"
          value={this.state.value}
          onChange={this.changeEvent}
          autoFocus
        />
      </div>
    );
  }
}

export default SearchInput;
