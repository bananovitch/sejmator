import React from 'react';
import { shallow, mount, render } from 'enzyme';



export const Pagination = ({ currentPage, changePage }) => (
	<header className="App-header">
      <button 
      	onClick={ () => changePage( currentPage - 1 ) }
      	>Poprzednia strona
      </button>
      <button 
      	onClick={ () => changePage( currentPage + 1 ) }
      >Następna strona</button>
     </header>
)
