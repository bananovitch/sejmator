import React, { Component } from 'react';
import './App.css';
import fetch from 'isomorphic-fetch';
import AppHeader from './Components/AppHeader.js'
import ResultsTable from './Components/ResultsTable.js'


const pathBase = "https://api-v3.mojepanstwo.pl/dane/poslowie.json";
const requestType =  "_type=objects";
const paramPage = 'page=';
const term = 'conditions[poslowie.kadencja]=8'


class App extends Component {

  constructor(props) {
    super(props);
    this.fetchSpeeches = this.fetchSpeeches.bind(this);
    this.state = {
      result:[],
      page:1
    }
  }

  fetchSpeeches( page = 1 ) {
    fetch(`${pathBase}?${requestType}&${paramPage}${page}&${term}`)
    .then(response => response.json())
    .then(response => this.setState({ 
          result:response.Dataobject,
          page
         }));
  }

  componentDidMount(){
    this.fetchSpeeches(1);
  }

  render() {
    return (
      <div className="App">
        <AppHeader 
          currentPage={this.state.page} 
          clickHandler={this.fetchSpeeches}
        />
        <ResultsTable 
          dataArray={this.state.result}
        />
      </div>
    );
  }
}

export default App;