import React from 'react';
import Enzyme, {mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {Provider} from "react-redux";

import RegistrationForm from './registerForm';
import RegisterContainer from "./registerContainer";

Enzyme.configure({ adapter: new Adapter() });

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('<RegisterContainer />', () => {
  it('should match the snapshot', () => {
    const component = shallow(<RegisterContainer debug />);
    expect(component).toMatchSnapshot();
  });
});

describe('Registration form', () => {
  const store = mockStore({});
  const wrapper = mount(
    <Provider store={store}>
      <MemoryRouter>
        <RegistrationForm />
      </MemoryRouter>
    </Provider>,
  );

  it('should match the snapshoot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render register page correctly', () => {
    expect(wrapper.find('.panel-heading').exists()).toBe(true);
    expect(wrapper.find('h3').text()).toBe('Create Account');
    expect(wrapper.find('h3').length).toEqual(1);
    expect(wrapper.find('.panel-body').exists()).toBe(true);
    expect(wrapper.find('TextInput')).toBeDefined();
  });
});
