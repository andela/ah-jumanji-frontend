import React from 'react';
import Enzyme, { mount, shallow} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import {
  MemoryRouter
} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  Provider
} from "react-redux";

import Edit from'./_articleedit';

Enzyme.configure({ adapter: new Adapter() });
const middlewares = [thunk];
const fakeStore = configureStore(middlewares);

Enzyme.configure({ adapter: new Adapter() });

describe('EditPage', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Edit debug />);

    expect(component).toMatchSnapshot();
  });
});
