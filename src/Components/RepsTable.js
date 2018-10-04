import React from 'react';
import { RepsTableDumb } from './RepsTableDumb';
import { Pagination } from './Pagination';
import { AppHeader } from './AppHeader';


const pathBase = "https://api-v3.mojepanstwo.pl/dane/";
const paramPage = 'page=';
const term = 'conditions[poslowie.kadencja]=8'

export class RepsTable extends React.Component {
    
    constructor(props) {
        super(props);
        this.fetchReps = this.fetchReps.bind(this);
        this.state = {
          result:[],
          page:1
        }
    }
    //TO DO: refactor the fetch to use Async/Await - it will make it testable
      fetchReps( page = 1 ) {
        fetch(`${pathBase}?${paramPage}${page}&${term}`)
        .then(response => response.json())
        .then(response => this.setState({ 
              result:response.Dataobject,
              page
             }));
      }

      componentDidMount() {
        this.fetchReps(1);
      }

      render() {
        return (
        <main>
          <AppHeader>Posłowie</AppHeader>
          <div className="page-content">        
          <Pagination 
            currentPage={this.state.page} 
            changePage={this.fetchReps}
          />
          <RepsTableDumb dataArray={this.state.result} />
          </div>
        </main>
        ) 
        
      }

}
