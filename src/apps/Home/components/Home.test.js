import React from 'react';
import {shallow} from 'enzyme';
import Home from './Home';

  describe('<Home /> snapshot', () => {
    it('should match the snapshot', () => {
      const component = shallow(<Home debug />);
      expect(component).toMatchSnapshot();
    });
  });