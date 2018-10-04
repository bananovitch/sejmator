import React from 'react';
import { shallow } from 'enzyme';
import { Menu } from './Menu';
import { wrap } from 'module';

const wrapper = shallow(<Menu/>)

describe("When rendering a smart menu component", () => {
    it("initializes with untoggled menu", () => {
        expect(wrapper.state("toggled")).toBe(false);
        expect(wrapper.state("menuClassNames")).toBe("menu");
    })
    
    it("changes toggle state after calling menuToggle", () => {
        const componentInstance = wrapper.instance();
        componentInstance.menuToggle();
        
        expect(wrapper.state("toggled")).toBe(true);
        console.log(wrapper.state("menuClassNames"))
        expect(wrapper.state("menuClassNames")).toBe("menu menu--toggled");
    })
})