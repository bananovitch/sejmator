import React from "react";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import { Pagination } from './Pagination'


Enzyme.configure({ adapter: new Adapter() });

const page = 1;
const dumbChangePage = () => { return null }
const wrapper = shallow(<Pagination currentPage={page} changePage={dumbChangePage} />)

describe("When rendering", ()=> {
	it("contains two buttons", () => {
		expect(wrapper.find('button')).toHaveLength(2);
	})
})