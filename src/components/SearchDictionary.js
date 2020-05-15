import React, { Component } from "react";

class SearchDictionary extends Component {
  state = {
    text: ""
  };
  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.searchWord(this.state.text);
    this.setState({ text: "" });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="text"
            value={this.state.text}
            placeholder="Search Definition"
            onChange={this.onChangeHandler}
          />
        </form>
      </div>
    );
  }
}

export default SearchDictionary;
