import React, { Component } from 'react';
import { RepsTableDumb } from './RepsTableDumb';
import { shallow } from 'enzyme'

const mockData = [
	{
		data:{}
	}
]
//this is to match the API field names which contain dots
mockData[0].data["poslowie.nazwa"] = "test 1";
mockData[0].data["sejm_kluby.skrot"] = "test klub";
mockData[0].data["poslowie.frekwencja"] = 0.99;
mockData[0].data["poslowie.liczba_wypowiedzi"] = 123;

const wrapper = shallow(<RepsTableDumb dataArray={mockData}/>);

describe("When rendering", () => {
	it("displays a table", () => {
		expect(wrapper.find('table')).toHaveLength(1)
	})
	it("renders passed data in a row", ()=> {
		expect(wrapper.find('tbody tr').first().text()).toContain(mockData[0].data["poslowie.nazwa"])
		expect(wrapper.find('tbody tr').childAt(1).text()).toContain(mockData[0].data["sejm_kluby.skrot"])
		expect(wrapper.find('tbody tr').childAt(2).text()).toContain(mockData[0].data["poslowie.frekwencja"].toString())
		expect(wrapper.find('tbody tr').childAt(3).text()).toContain(mockData[0].data["poslowie.liczba_wypowiedzi"].toString())
	})
});
