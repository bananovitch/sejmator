import React, { Component } from 'react';
import './App.css';
import { AppHeader } from './Components/AppHeader'
import { RepsTable } from './Components/RepsTable'
import { Menu } from './Components/Menu'
import { Route } from 'react-router-dom'
import { Description } from './Components/Description';
import { SpeechesTable } from './Components/SpeechesTable';


const navigationItems = [ 
  { id: 0, text: "Strona główna", href: "" },
  { id: 1, text: "Posłowie", href:"poslowie" },
  { id: 2, text: "Przemówienia", href:"speeches"}  
]


class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Menu items={navigationItems}/>
        <AppHeader/>
        <Route exact path="/" component={Description} />
        <Route path="/poslowie" component={RepsTable} />
        <Route path="/speeches" component={SpeechesTable} />
        
      </div>
    );
  }
}

export default App;