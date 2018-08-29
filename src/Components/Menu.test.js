import React from "react";
import { shallow, mount, render } from 'enzyme';
import { Menu } from './Menu'
const listItems = [ 
	{ id: 1, text: "First item" },
	{ id: 2, text: "Second item" }  
]
const wrapper = shallow(<Menu items={ listItems }/>);

describe("when rendering menu using shallow", () => {
	it("renders a list element", () => {
		expect(wrapper.find("ul")).toHaveLength(1);
	});
	it("generates correct number of list items", () => {
		expect(wrapper.find("ul li")).toHaveLength(2);
	})
});
