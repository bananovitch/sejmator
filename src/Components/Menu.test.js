import React from "react";
import { shallow, mount, render } from 'enzyme';
import { Menu } from './Menu'
const listItems = [ 
	{ id: 1, text: "First item", href:"first" },
	{ id: 2, text: "Second item", href:"second" }  
]
const wrapper = shallow(<Menu items={ listItems }/>);



describe("when rendering menu using shallow", () => {
	it("renders a list element", () => {
		expect(wrapper.find("ul")).toHaveLength(1);
	});
	it("generates correct number of list items", () => {
		expect(wrapper.find("ul li")).toHaveLength(2);
	})
	it("creates link correctly", () => {
		expect(wrapper.find("ul li a")).toHaveLength(2);
		expect(wrapper.find("ul li a").first().prop('href')).toBe("/first")
		expect(wrapper.find("ul li a").last().prop('href')).toBe("/second")
	});
});