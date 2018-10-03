import React from 'react';
import './Pagination.css'

export const Pagination = ({ currentPage, changePage }) => (
	<div className="pagination">
      <button 
      	onClick={ () => changePage( currentPage - 1 ) }
      	>Poprzednia strona
      </button>
      <button 
      	onClick={ () => changePage( currentPage + 1 ) }
      >Następna strona</button>
     </div>
)
