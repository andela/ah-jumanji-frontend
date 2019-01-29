import React from 'react';
import { shallow } from 'enzyme';
import SocialIcons from './SocialShareIcons';


describe('SocialIcons: ', () => {
  let socialIcons;
  beforeEach(() => {
    socialIcons = shallow(<SocialIcons />);
  });

  it('renders the icons: ', () => expect(socialIcons.exists()).toEqual(true));
});
