import React from 'react';

import { shallow } from 'enzyme';
import Rating from './Rating';



describe('Rating page', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Rating debug />);

    expect(component).toMatchSnapshot();
  });

});
