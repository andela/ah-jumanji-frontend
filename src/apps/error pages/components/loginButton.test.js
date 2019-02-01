import {shallow} from "enzyme/build";
import React from "react";
import LoginButton from "./loginButton";

describe('Back button test', () => {
  it('should match the snapshot', () => {
    const component = shallow(<LoginButton debug />);
    expect(component).toMatchSnapshot();
  });
});
