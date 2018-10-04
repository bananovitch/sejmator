import React from "react";
import { shallow } from 'enzyme';
import { AppHeader } from './AppHeader'

const wrapper = shallow(<AppHeader>Test content</AppHeader>)

describe("when rendering AppHeader", () => {
    it("Passes the children properly", () => {
        expect(wrapper.text()).toEqual("Test content")
    })
});

