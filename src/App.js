import React, { Component } from 'react';
import './App.css';
import { RepsTableContainer } from './Components/RepsTableContainer'
import { MenuContainer } from './Components/MenuContainer'
import { Route } from 'react-router-dom'
import { Description } from './Components/Description';
import { SpeechesTable } from './Components/SpeechesTable';
import { RepInfoContainer } from './Components/RepInfoContainer';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      menuToggled: true
    }
  }

  render() {
    return (
      <div className="App">
        <MenuContainer/>
        <Route exact path="/" component={Description} />
        <Route exact path="/poslowie" component={RepsTableContainer} />
        <Route path="/speeches" component={SpeechesTable} />
        <Route path="/poslowie/:id" component={RepInfoContainer} />
      </div>
    );
  }
}

export default App;