import React from 'react';

import Enzyme, { shallow } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

import BookmarkButton from './BookmarkButton';

Enzyme.configure({ adapter: new Adapter() });


describe('<BookmarkButton />', () => {
  it('should match the snapshot', () => {
    const component = shallow(<BookmarkButton debug />);
    expect(component).toMatchSnapshot();
  });
});
