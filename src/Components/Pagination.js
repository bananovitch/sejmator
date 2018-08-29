import React from 'react';

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
