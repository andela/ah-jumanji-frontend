import React from 'react';

import Enzyme, { shallow } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

import Navigation from './Navbar';
import ProfPic from './profPic';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    location: {pathname: "/a/home"}
  };

  const mountedEnzymeWrapper = shallow(<Navigation {...props} />);

  return {
    props,
    mountedEnzymeWrapper
  };
}

describe('Navigation', () => {
  it('should render self and subcomponents', () => {
    const { mountedEnzymeWrapper } = setup();

    expect(mountedEnzymeWrapper.find('nav').hasClass('navbar-expand-lg')).toBe(true);
  });
});

describe('ProfPic: ', () => {
  let profPic;
  beforeEach(() => {
    profPic = shallow(<ProfPic />);
  });

  it('gets profile photo: ', () => expect(profPic.exists()).toEqual(true));

});
