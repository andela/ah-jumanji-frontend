import Enzyme, { mount, shallow } from "enzyme/build";
import React from "react";

import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router-dom';
import {Provider} from "react-redux";
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import LoginButton from "./loginButton";

Enzyme.configure({ adapter: new Adapter() });

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

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

describe('components', () => {
  describe('LoginButton', () => {
    it('should render self and subcomponents', () => {
      const store = mockStore({});
      const enzymeWrapper = mount(
        <Provider store={store}>
          <MemoryRouter>
            <LoginButton />
          </MemoryRouter>
        </Provider>,);
      expect(enzymeWrapper.find('LoginButton')).toBeDefined();
      expect(enzymeWrapper.find('a')).toHaveLength(1);
      expect(enzymeWrapper.find('.btn').exists()).toBe(true);
    });
});
});
