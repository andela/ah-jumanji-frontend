import React from 'react';
import Enzyme, {mount} from "enzyme/build";
import Adapter from "enzyme-adapter-react-16/build";
import NavLink from "./navLink";

Enzyme.configure({adapter: new Adapter()});


describe('Test navLinks', function () {
  const wrapper = mount(<NavLink url="#location" label="Label" id="nav-label" />);
  it('should render corectly', function () {
    expect(wrapper.find('.nav')).toBeDefined();
    expect(wrapper.find('a').text()).toEqual('Label');
  });
});
