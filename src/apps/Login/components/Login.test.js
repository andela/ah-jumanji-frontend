import React from 'react';
import Enzyme, {mount, shallow} from 'enzyme';
import Adapter from "enzyme-adapter-react-16/build";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";


import LoginContainer from './LoginContainer';
import LoginForm from './LoginForm';
import SocialAuthButtons from './SocialAuthButtons';

Enzyme.configure({ adapter: new Adapter() });

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('LoginContainer', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<LoginContainer debug />);

    expect(component).toMatchSnapshot();
  });
});

describe('LoginForm', () => {
  let wrapper;
  const store = mockStore({});

  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <LoginForm />
        </MemoryRouter>
      </Provider>,
  );
  });

  it('should render correctly in "debug" mode', () => {
    const component = shallow(<LoginForm debug />);
    expect(component).toMatchSnapshot();
  });

  it('should render login page correctly', () => {
    expect(wrapper.find('.panel').exists()).toBe(true);
    expect(wrapper.find('.panel-body').exists()).toBe(true);
    expect(wrapper.find('TextInput')).toBeDefined();
  });
});

describe('SocialAuthButtons', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<SocialAuthButtons debug />);

    expect(component).toMatchSnapshot();
  });
});
