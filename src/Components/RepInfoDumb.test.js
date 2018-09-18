import React from 'react'
import { shallow } from 'enzyme';
import { RepInfoDumb } from './RepInfoDumb'

const wrapper = shallow(<RepInfoDumb/>)

describe("When rendering", () => {
    it("returns a wrapper element", () => {
        expect(wrapper.find(".rep-info")).toHaveLength(1)
    })
})