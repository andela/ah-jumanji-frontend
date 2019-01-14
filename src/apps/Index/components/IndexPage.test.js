import React from 'react';

import { shallow } from 'enzyme';

import IndexPage from './IndexPage';

import MainPreloader from './MainPreloader';

describe('IndexPage', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<IndexPage debug />);

    expect(component).toMatchSnapshot();
  });
});

describe('MainPreloader', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<MainPreloader debug />);

    expect(component).toMatchSnapshot();
  });
});
