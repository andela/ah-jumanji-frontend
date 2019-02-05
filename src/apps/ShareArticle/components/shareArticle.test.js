import React from 'react';
import { shallow } from 'enzyme';
import SocialIcons  from './shareArticle';
import Icons from './container';

describe('SocialIcons: ', () => {
  let icons;
  beforeEach(() => {
    icons = shallow(<SocialIcons />);
  });

  it('renders icons: ', () => expect(icons.exists()).toEqual(true));
  it('renders props: ', () => {
    const icons = shallow(<SocialIcons title="the game" />);
    expect(icons.instance().props.title).toBe("the game");
  });
});

describe('Icons: ', () => {
  let socialIcons;
  beforeEach(() => {
    socialIcons = shallow(<Icons />);
  });

  it('renders icons: ', () => expect(socialIcons.exists()).toEqual(true));
});

