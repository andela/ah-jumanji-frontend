import React from 'react';

import { shallow } from 'enzyme';
import AuthorProfile from './authorProfile';




describe('authorProfile page', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<AuthorProfile debug />);

    expect(component).toMatchSnapshot();
  });

});
