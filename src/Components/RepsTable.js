import React from 'react';
import { RepsTableDumb } from './RepsTableDumb';
import { Pagination } from './Pagination'

const pathBase = "https://api-v3.mojepanstwo.pl/dane/poslowie.json";
const requestType =  "_type=objects";
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

    fetchReps( page = 1 ) {
        fetch(`${pathBase}?${requestType}&${paramPage}${page}&${term}`)
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
        return <div class="poslowie">        
        <RepsTableDumb dataArray={this.state.result} />
        <Pagination 
          currentPage={this.state.page} 
          changePage={this.fetchReps}
        />
        </div>

      }

}
