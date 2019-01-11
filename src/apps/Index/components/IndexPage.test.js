import React from 'react';

import { shallow } from 'enzyme';

import IndexPage from './IndexPage';

describe('IndexPage', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<IndexPage debug />);

    expect(component).toMatchSnapshot();
  });
});
