import React from 'react';

import { shallow } from 'enzyme';
import authorProfile from './authorProfile';




describe('authorProfile page', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<authorProfile debug />);

    expect(component).toMatchSnapshot();
  });

});
