import React from 'react';
import {shallow} from 'enzyme';

import RegisterRedirectActivated from "./registerRedirectActivated";


describe('<RegisterRedirectActivated />', () => {
 const mockRegisterRedirectActivatedFn = jest.fn;
 let wrapper;

 beforeEach(() => {
    wrapper = shallow(<RegisterRedirectActivated registerRedirectActivated={mockRegisterRedirectActivatedFn} />);
  });

  it('should match the snapshoot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render register redirect activated page correctly', () => {
    expect(wrapper.find('.row').exists()).toBe(true);
    expect(wrapper.find('.register-redirect-modal').exists()).toBe(true);
    expect(wrapper.find('p').text()).toBe('Account Activated!');
    expect(wrapper.find('p').length).toEqual(1);
    expect(wrapper.find('a').text()).toBe('You can now login here');
  });
});
