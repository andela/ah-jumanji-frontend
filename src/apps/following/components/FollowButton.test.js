import React from 'react';
import { shallow } from 'enzyme';

// Import container
import FollowButton from './FollowButton';

describe('FollowButton Container', () => {
  let follow;
  beforeEach(() => {
    follow = shallow(<FollowButton />);
  });

  it('renders correctly: ', () => expect(follow.exists()).toEqual(true));

  it('renders props', () => {
    const buttons = shallow(<FollowButton prop="props" />);
    expect(buttons.instance().props.prop).toBe("props");
  });
  
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<FollowButton debug />);

    expect(component).toMatchSnapshot();
  });
});
