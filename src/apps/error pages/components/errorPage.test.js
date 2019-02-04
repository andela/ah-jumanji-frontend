import {shallow} from "enzyme/build";
import React from "react";
import ErrorPage from "./error404Page";

describe('Error Page test', () => {
  it('should match the snapshot', () => {
    const component = shallow(<ErrorPage debug />);
    expect(component).toMatchSnapshot();
  });
});
