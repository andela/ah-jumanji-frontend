import React from "react";

import {shallow} from "enzyme";

import Header from "./HeaderComponent";


describe("Header Section", () => {
  const component = shallow(<Header debug label="label" />);

  it("should render correctly ", () => {
    expect(component).toMatchSnapshot();
  });


});
