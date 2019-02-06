import React from 'react';
import { shallow } from 'enzyme';

// Import container
import Follow from './followersComponent';

describe('Follow Container', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Follow debug />);

    expect(component).toMatchSnapshot();
  });
});
