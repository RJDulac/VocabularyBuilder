import React, { Component } from "react";
import axios from "axios";
import SearchDictionary from "./components/SearchDictionary";

class App extends Component {
  state = {
    word: "dog",
    definitions: []
  };
  async componentDidMount() {
    const response = await axios.get(
      `https://dictionaryapi.com/api/v3/references/collegiate/json/${this.state.word}?key=${process.env.REACT_APP_WEBSTER_DICTIONARY_CLIENT_ID}`
    );
    console.log(response.data);
  }
  searchWord = async text => {
    const response = await axios.get(
      `https://dictionaryapi.com/api/v3/references/collegiate/json/${text}?key=${process.env.REACT_APP_WEBSTER_DICTIONARY_CLIENT_ID}`
    );

    const definitions = response.data.map(def => def.shortdef);

    console.log(response.data);
    this.setState({ definitions });
  };
  render() {
    return (
      <div>
        <SearchDictionary searchWord={this.searchWord} />
        {this.state.definitions.map(def => {
          return def.map(def => {
            return <p key={Math.random()}>{def}</p>;
          });
        })}
      </div>
    );
  }
}

export default App;
