import React from 'react';

import { shallow } from 'enzyme';

import Login from './LoginContainer';

describe('Navigation', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Login debug />);

    expect(component).toMatchSnapshot();
  });
});
