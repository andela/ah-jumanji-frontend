import React from 'react';

import Enzyme, { shallow } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

import WelcomeSection from './WelcomeSection';


Enzyme.configure({ adapter: new Adapter() });


describe('WelcomeSection', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<WelcomeSection debug />);

    expect(component).toMatchSnapshot();
  });
});