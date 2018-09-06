import React, { Component } from 'react';
import './App.css';
import fetch from 'isomorphic-fetch';
import { AppHeader } from './Components/AppHeader'
import { Pagination } from './Components/Pagination'
import { ResultsTable } from './Components/ResultsTable'
import { Menu } from './Components/Menu'
import { Route } from 'react-router-dom'


const pathBase = "https://api-v3.mojepanstwo.pl/dane/poslowie.json";
const requestType =  "_type=objects";
const paramPage = 'page=';
const term = 'conditions[poslowie.kadencja]=8'
const navigationItems = [ 
  { id: 1, text: "Posłowie", href:"poslowie" },
  { id: 2, text: "Second item", href:"second"}  
]

class dumbComponent2 extends React.Component {
  render () { return <p>some component 2</p> }
}

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
        
        <AppHeader/>
        <Route path="/poslowie" render={ (props) => <ResultsTable {...props} dataArray={this.state.result} />} />
        <Route path="/second" component={dumbComponent2} />
        <Pagination 
          currentPage={this.state.page} 
          changePage={this.fetchSpeeches}
        />
      </div>
    );
  }
}

export default App;