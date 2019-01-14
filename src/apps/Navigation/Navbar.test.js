import React from 'react';

import { shallow } from 'enzyme';

import Navigation from './Navbar';

describe('Navigation', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Navigation debug />);

    expect(component).toMatchSnapshot();
  });
});
