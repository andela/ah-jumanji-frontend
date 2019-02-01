import {shallow} from "enzyme/build";
import React from "react";
import BackButton from "./backButton";

describe('Back button test', () => {
  const component = shallow(<BackButton debug />);
  it('should match the snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
