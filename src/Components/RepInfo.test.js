import React from 'react'
import { shallow } from 'enzyme';
import { RepInfo } from './RepInfo'

const wrapper = shallow(<RepInfo/>)

describe("When rendering", () => {
    it("returns a wrapper element", () => {
        expect(wrapper.find(".rep-info")).toHaveLength(1)
    })
})