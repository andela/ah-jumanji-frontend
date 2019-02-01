import React from 'react';
import { shallow } from 'enzyme';

// Import container
import FollowButton from './FollowButton';

describe('FollowButton Container', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<FollowButton debug />);

    expect(component).toMatchSnapshot();
  });
});
