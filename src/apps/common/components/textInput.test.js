import React from "react";

import {shallow} from "enzyme";

import Input from "./textInput";


describe("Header Section", () => {
  const component = shallow(<Input
    debug label="label" value="value" placeholder="value" onChange={() => {
  }} type="text" name="value"
  />);

  it("should render correctly ", () => {
    expect(component).toMatchSnapshot();
  });
});
