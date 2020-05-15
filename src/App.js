import React, { Component } from "react";
import axios from "axios";
import SearchDictionary from "./components/SearchDictionary";

class App extends Component {
  state = {
    word: "react"
  };
  async componentDidMount() {
    const response = await axios.get(
      `https://dictionaryapi.com/api/v3/references/collegiate/json/${this.state.word}?key=${process.env.REACT_APP_WEBSTER_DICTIONARY_CLIENT_ID}`
    );
    console.log(response.data[0].shortdef);
  }
  searchWord = async text => {
    const response = await axios.get(
      `https://dictionaryapi.com/api/v3/references/collegiate/json/${text}?key=${process.env.REACT_APP_WEBSTER_DICTIONARY_CLIENT_ID}`
    );
    this.setState({ word: response.data[0].shortdef });
  };
  render() {
    return (
      <div>
        <SearchDictionary searchWord={this.searchWord} />
        <p>{this.state.word}</p>
      </div>
    );
  }
}

export default App;
