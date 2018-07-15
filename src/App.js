import React, { Component } from 'react';
import './App.css';
import fetch from 'isomorphic-fetch';

const pathBase = "https://api-v3.mojepanstwo.pl/dane/poslowie.json";
const requestType =  "_type=objects";
const paramPage = 'page=';



class App extends Component {

  constructor(props) {
    super(props);
    this.fetchSpeeches = this.fetchSpeeches.bind(this);
    this.state = {
      result:[],
      page:0
    }
  }

  fetchSpeeches( page = 0 ) {
    fetch(`${pathBase}?${requestType}&${paramPage}${page}`)
    .then(response => response.json())
    .then(response => this.setState({ 
      result:response.Dataobject,
      page
     }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Sejmator</h1>
          <button onClick={() => this.fetchSpeeches(this.state.page) }>Pobierz dane</button>
        <button onClick={() => this.fetchSpeeches(this.state.page - 1) } >Poprzednia strona</button>
        <button onClick={() => this.fetchSpeeches(this.state.page + 1) }>Następna strona</button>
        
        </header>
        
        <ul>
        {this.state.result.map( (item, index) => 
          <li key={index}>{item.data["poslowie.nazwa"]}</li> 
          )}
        </ul>
        
      </div>
    );
  }
}



export default App;
