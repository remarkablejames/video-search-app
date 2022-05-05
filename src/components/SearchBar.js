import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onChangeHandler = (e) => {
    this.setState({ term: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.formSubmit(this.state.term);
  };
  render() {
    return (
      <div className="ui raised segment container">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Search Any Video</label>

            <div className="ui action input">
              <input
                type="text"
                placeholder="Search..."
                value={this.state.term}
                onChange={this.onChangeHandler}
              />
              <button className="ui icon button">
                <i className="search icon"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
