import React from 'react';
import {shallow} from 'enzyme';
import Login from './Login';

  describe('<Login /> snapshot', () => {
    it('should match the snapshot', () => {
      const component = shallow(<Login debug />);
      expect(component).toMatchSnapshot();
    });
  });