import React from 'react';
import { Menu } from './Menu';

export class MenuContainer extends React.Component {

    constructor(props){
        super(props)
        this.menuToggle = this.menuToggle.bind(this)
        this.state = {
            navigationItems : [ 
                { id: 0, text: "Strona główna", href: "" },
                { id: 1, text: "Posłowie", href:"poslowie" },
                { id: 2, text: "Przemówienia", href:"speeches"}  
            ],
            toggled: false,
            menuClassNames: "menu"
        }
    }

    menuToggle() {
        const newClassnames = this.state.toggled? "menu" : "menu menu--toggled"
        this.setState({
            toggled: !this.state.toggled,
            menuClassNames: newClassnames
        })
    }

    render() {
        return <Menu 
                items={this.state.navigationItems} 
                toggle={this.menuToggle}
                classNames={this.state.menuClassNames}
                />
    }

}