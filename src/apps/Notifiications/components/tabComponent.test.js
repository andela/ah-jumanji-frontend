import React from 'react';
import Enzyme, {mount} from "enzyme/build";
import Adapter from "enzyme-adapter-react-16/build";
import NavTab from "./tabComponent";

Enzyme.configure({adapter: new Adapter()});


describe('Test navLinks', function () {
  let cont = <li>This is the list</li>;
  const wrapper = mount(<NavTab label="label" id="identity" content={cont} />);
  it('should render corectly', function () {
    expect(wrapper.find('.nav')).toBeDefined();
    expect(wrapper.find('li').text()).toEqual('This is the list');
  });
});
