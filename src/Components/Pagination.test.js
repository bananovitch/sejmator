import React from "react";
import { shallow, mount, render } from 'enzyme';
import { Pagination } from './Pagination'

const page = 1;
const changePageMock = jest.fn()
const wrapper = shallow(<Pagination currentPage={page} changePage={changePageMock} />)

describe("When rendering", ()=> {
	it("contains two buttons", () => {
		expect(wrapper.find('button')).toHaveLength(2);
	});
	it("displays proper texts", () => {
		expect(wrapper.find('button').first().text()).toContain("Poprzednia strona")
		expect(wrapper.find('button').last().text()).toContain("Następna strona")
	});
	it("passes click handler properly", () => {
		wrapper.find('button').first().simulate('click');
		wrapper.find('button').last().simulate('click');
		expect(changePageMock.mock.calls.length).toEqual(2);
	})
})