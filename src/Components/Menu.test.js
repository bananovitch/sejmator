import React from 'react';
import { shallow } from 'enzyme';
import { Menu } from './Menu';

const wrapper = shallow(<Menu/>)

describe("When rendering a smart menu component", () => {
    it("initializes with untoggled menu", () => {
        expect(wrapper.state("toggled")).toBe(false)
    })
    //TO DO: add tests for state changes
})