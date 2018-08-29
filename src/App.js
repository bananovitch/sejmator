import React, { Component } from 'react';
import './App.css';
import fetch from 'isomorphic-fetch';
import { AppHeader } from './Components/AppHeader'
import { Pagination } from './Components/Pagination'
import { ResultsTable } from './Components/ResultsTable'
import { Menu } from './Components/Menu'


const pathBase = "https://api-v3.mojepanstwo.pl/dane/poslowie.json";
const requestType =  "_type=objects";
const paramPage = 'page=';
const term = 'conditions[poslowie.kadencja]=8'
const navigationItems = [ 
  { id: 1, text: "First item" },
  { id: 2, text: "Second item" }  
]


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
        <Menu items={navigationItems}/>
        <Pagination 
          currentPage={this.state.page} 
          changePage={this.fetchSpeeches}
        />
        <AppHeader/>
        <ResultsTable 
          dataArray={this.state.result}
        />
      </div>
    );
  }
}

export default App;