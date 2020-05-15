import React, { Component } from "react";
import axios from "axios";
import SearchDictionary from "./components/SearchDictionary";

class App extends Component {
  state = {
    word: "",
    definitions: []
  };
  async componentDidMount() {
    const response = await axios.get(
      `https://dictionaryapi.com/api/v3/references/collegiate/json/example?key=${process.env.REACT_APP_WEBSTER_DICTIONARY_CLIENT_ID}`
    );

    const definitions = response.data.map(def => def.shortdef);

    this.setState({ definitions, word: "example" });
  }
  searchWord = async text => {
    try {
      const response = await axios.get(
        `https://dictionaryapi.com/api/v3/references/collegiate/json/${text}?key=${process.env.REACT_APP_WEBSTER_DICTIONARY_CLIENT_ID}`
      );

      const definitions = response.data.map(def => def.shortdef);

      console.log(definitions);
      this.setState({ definitions, word: text });
    } catch (error) {
      console.log("Something went wrong", error);
      this.setState({ definitions: [] });
    }
  };
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <SearchDictionary searchWord={this.searchWord} />
        <p>
          <strong>The defintions of {this.state.word} are:</strong>
        </p>
        {this.state.definitions.includes(undefined) ||
        this.state.definitions.length === 0 ? (
          <p>{this.state.word} not found</p>
        ) : (
          this.state.definitions.map(def => {
            return def.map(def => {
              return <p key={Math.random()}>{def}</p>;
            });
          })
        )}
      </div>
    );
  }
}

export default App;
