import React from 'react';
import './Pagination.css'

export const Pagination = ({ currentPage, changePage, totalPages = 0 }) => {
      let buttons = [];
      for (let i = 1; i< totalPages + 1; i++) {
            buttons.push(<button className="pagination__button" onClick={ () => changePage(i) } key={i}>{i}</button>)
      }
      return (<div className="pagination">
      <button className="pagination__button" 
      	onClick={ () => changePage( currentPage - 1 ) }
      	>Poprzednia strona
      </button>
      { buttons } 
      <button className="pagination__button" 
      	onClick={ () => changePage( currentPage + 1 ) }
      >Następna strona</button>
     </div>
)}
