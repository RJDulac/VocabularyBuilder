import React, { Component } from "react";
import axios from "axios";

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
  render() {
    return (
      <div>
        <h1>working</h1>
      </div>
    );
  }
}

export default App;
