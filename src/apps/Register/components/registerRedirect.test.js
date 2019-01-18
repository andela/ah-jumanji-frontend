import React from 'react';
import {shallow} from 'enzyme';

import RegisterRedirect from "./registerRedirect";


describe('Register redirect', () => {
 const mockRegisterRedirectFn = jest.fn;
 let wrapper;

 beforeEach(() => {
    wrapper = shallow(<RegisterRedirect registerRedirect={mockRegisterRedirectFn} />);
  });

  it('should match the snapshoot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render register page correctly', () => {
    expect(wrapper.find('.row').exists()).toBe(true);
    expect(wrapper.find('p').text()).toBe('Almost there!Go to your mailbox and click the link we sent to you to activate your Account.');
    expect(wrapper.find('p').length).toEqual(1);
  });
});
