import React from 'react';

import {shallow} from 'enzyme';

import LoginContainer from './LoginContainer';

import LoginForm from './LoginForm';

import SocialAuthButtons from './SocialAuthButtons';

describe('LoginContainer', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<LoginContainer debug />);

    expect(component).toMatchSnapshot();
  });
});

describe('LoginForm', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<LoginForm debug />);

    expect(component).toMatchSnapshot();
  });
});

describe('SocialAuthButtons', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<SocialAuthButtons debug />);

    expect(component).toMatchSnapshot();
  });
});
