import React, { Component } from 'react';

class AppHeader extends Component {
  render(){
    const { currentPage, clickHandler } = this.props  
    return <header className="App-header">
      <h1 className="App-title">Posłowie</h1>
      <button onClick={ () => {clickHandler(currentPage - 1)} }>Poprzednia strona</button>
      <button onClick={ () => {clickHandler(currentPage + 1)} }>Następna strona</button>
     </header>
  }

}

export default AppHeader;