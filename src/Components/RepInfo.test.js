import React from 'react'
import { shallow } from 'enzyme';
import { RepInfo } from './RepInfo'
import { AppHeader } from './AppHeader';


const testRep = {
    data: {
        "ludzie.nazwa":"Testowy Poseł"
    }
}
const wrapper = shallow(<RepInfo Rep={testRep}/>)

describe("When rendering", () => {
    it("returns a wrapper element", () => {
        expect(wrapper.find(".rep-info")).toHaveLength(1)
    })

    it("Renders name in header", () => {
        expect(wrapper.find(AppHeader).dive().find(".App-title").text()).toBe(testRep.data["ludzie.nazwa"])
    })

})