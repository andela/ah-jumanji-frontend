import React from 'react';

import Enzyme, { shallow, mount } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router-dom';
import {Provider} from "react-redux";
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import LoginContainer from './LoginContainer';
import LoginForm from './LoginForm';
import WelcomeSection from '../../common/components/WelcomeSection';

Enzyme.configure({ adapter: new Adapter() });

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('LoginContainer', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<LoginContainer debug />);

    expect(component).toMatchSnapshot();
  });
});

describe('components', () => {
  describe('LoginContainer', () => {
    it('should render self and subcomponents', () => {
      const store = mockStore({});
      const props = {};
      const enzymeWrapper = mount(
        <Provider store={store}>
          <MemoryRouter>
            <LoginContainer {...props} />
          </MemoryRouter>
        </Provider>,);
      expect(enzymeWrapper.find('LoginContainer')).toBeDefined();
      expect(enzymeWrapper.find('div')).toHaveLength(15);
      expect(enzymeWrapper.contains(<LoginForm />)).toBe(true);
      expect(enzymeWrapper.contains(<WelcomeSection />)).toBe(true);
      expect(enzymeWrapper.find('.row login-container')).toBeDefined();
    });
});
});
