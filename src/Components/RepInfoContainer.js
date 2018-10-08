import React from 'react';
import { RepInfo } from './RepInfo';

export class RepInfoContainer extends React.Component {

    constructor(props) {
        super(props);
        this.fetchRepInfo = this.fetchRepInfo.bind(this);
        this.state = {
            repId: null,
            repData:null
        }
    };

    fetchRepInfo( repId ) {
        fetch(`https://api-v3.mojepanstwo.pl/dane/poslowie/${repId}`)
        .then(response => response.json())
        .then(response => this.setState({repData:response}));
      }

     componentDidMount() {
        this.setState({repId: this.props.match.params.id});
        this.fetchRepInfo(this.props.match.params.id)
    };



    render() {
        return(<p>{JSON.stringify(this.state.repData)}</p>)
    };

}