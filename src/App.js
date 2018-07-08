import React, { Component } from 'react';
import './App.css';
import fetch from 'isomorphic-fetch';

const pathBase = "https://api-v3.mojepanstwo.pl/dane/poslowie.json";


class App extends Component {

  

  constructor(props) {
    super(props);
    this.fetchSpeeches = this.fetchSpeeches.bind(this);
    this.state = {
      result:[]
    }
  }

  fetchSpeeches() {
    fetch(pathBase)
    .then(response => response.json())
    .then(response => this.setState({ result:response.Dataobject }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Sejmator</h1>
        </header>
        <h2>Sejmator</h2>
        <button onClick={() => this.fetchSpeeches() }>Pobierz dane</button>
        <ol>{this.state.result.map( (item) => <li>{item.slug}</li> )}</ol>
      </div>
    );
  }
}

export default App;
