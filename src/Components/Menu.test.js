import React from "react";
import { render } from 'enzyme';
import { Menu } from './Menu'
import { MemoryRouter } from 'react-router-dom'

const listItems = [ 
	{ id: 1, text: "First item", href:"first" },
	{ id: 2, text: "Second item", href:"second" }  
]
const wrapper = render(
<MemoryRouter>
	<Menu items={ listItems }/>
</MemoryRouter>
);



describe("when rendering menu", () => {
	
	it("creates a list item", () => {
			expect(wrapper.find("ul")).toBeDefined();
		})
	
	it("generates correct number of list items", () => {
		expect(wrapper.find("ul li")).toHaveLength(2);
	})

	it("creates link correctly", () => {
		expect(wrapper.find("ul li a")).toHaveLength(2);
		expect(wrapper.find("ul li a").first().prop('href')).toBe("/first")
		expect(wrapper.find("ul li a").last().prop('href')).toBe("/second")
	});

	

});