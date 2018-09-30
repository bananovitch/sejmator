import React, { Component } from 'react';
import './App.css';
import { RepsTable } from './Components/RepsTable'
import { Menu } from './Components/Menu'
import { Route } from 'react-router-dom'
import { Description } from './Components/Description';
import { SpeechesTable } from './Components/SpeechesTable';
import { RepInfoDumb } from './Components/RepInfoDumb';

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
        <Menu/>
        <Route exact path="/" component={Description} />
        <Route exact path="/poslowie" component={RepsTable} />
        <Route path="/poslowie/test" component={RepInfoDumb} />
        <Route path="/speeches" component={SpeechesTable} />
      </div>
    );
  }
}

export default App;