import React, { Component } from "react";

class SearchBar extends Component {
  state = { term: "" };
  onChangeHandler = (e) => {
    console.log(e.target.value);
    this.setState({ term: e.target.value });
  };
  onFormSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.term);
    // Here we initiate a search on youtube
  };
  render() {
    return (
      <div className="search-bar ui segment ">
        <form className="ui form container " onSubmit={this.onFormSubmit}>
          <div className="ui icon input loading fluid">
            <input
              type="text"
              placeholder="Search..."
              value={this.state.term}
              onChange={this.onChangeHandler}
            />
            <i className="search icon"></i>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
