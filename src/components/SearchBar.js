import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onChangeHandler = (e) => {
    this.setState({ term: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.formSubmit(this.state.term);
    this.setState({ term: "" });
  };
  render() {
    return (
      <div className="ui segment search-bar">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Video search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onChangeHandler}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
