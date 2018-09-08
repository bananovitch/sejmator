import React from 'react';

export const Pagination = ({ currentPage, changePage }) => (
	<nav>
      <button 
      	onClick={ () => changePage( currentPage - 1 ) }
      	>Poprzednia strona
      </button>
      <button 
      	onClick={ () => changePage( currentPage + 1 ) }
      >Następna strona</button>
     </nav>
)
