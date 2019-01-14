import React from 'react';

import { shallow } from 'enzyme';

import WelcomeSection from './WelcomeSection';

import FormInput from './FormInput';


describe('WelcomeSection', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<WelcomeSection debug />);

    expect(component).toMatchSnapshot();
  });
});

describe('FormInput', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<FormInput debug />);

    expect(component).toMatchSnapshot();
  });
});
