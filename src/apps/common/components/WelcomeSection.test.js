import React from "react";

import { shallow } from "enzyme";

import WelcomeSection from "./WelcomeSection";


describe("WelcomeSection", () => {
  it("should render correctly in debug mode", () => {
    const component = shallow(<WelcomeSection debug />);

    expect(component).toMatchSnapshot();
  });
});
