import {shallow} from "enzyme/build";
import React from "react";
import LoginButton from "./loginButton";

describe('Back button test', () => {
  let icons;
  beforeEach(() => {
    icons = shallow(<LoginButton />);
  });

  it('renders icons: ', () => expect(icons.exists()).toEqual(true));

  it('should match the snapshot', () => {
    const component = shallow(<LoginButton debug />);
    expect(component).toMatchSnapshot();
  });
});
