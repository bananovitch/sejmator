import React from 'react';
import { MenuDumb } from './MenuDumb';

export class Menu extends React.Component {

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
        const newToggleState = this.state.toggled ? false : true;
        this.setState({toggled: newToggleState})
        if (this.state.toggled) {
            this.setState({menuClassNames: "menu menu__toggled"})
        } else {
            this.setState({menuClassNames: "menu"})
        }
    }


    render() {
        return <MenuDumb 
                items={this.state.navigationItems} 
                toggle={this.menuToggle}
                classNames={this.state.menuClassNames}
                />
    }

}