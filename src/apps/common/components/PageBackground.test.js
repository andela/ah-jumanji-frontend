import React from 'react';
import Enzyme, {mount} from "enzyme/build";
import Adapter from "enzyme-adapter-react-16/build";
import PageBackground from "./PageBackground";

Enzyme.configure({adapter: new Adapter()});

describe('page background', function () {
  it('should render correctly', function () {
    let component = mount(<PageBackground />);
    expect(component.find('.bg-circle').exists()).toBe(true);
  });
});
