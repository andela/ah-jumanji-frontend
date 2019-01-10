import React from 'react';
import {shallow} from 'enzyme';

import RegisterRedirect from "./registerRedirect";

describe('Register redirect', () => {
 const mockRegisterRedirectFn = jest.fn;
 let wrapper;

 beforeEach(() => {
    wrapper = shallow(<RegisterRedirect login={mockRegisterRedirectFn} />);
  });

  it('should match the snapshoot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render register page correctly', () => {
    expect(wrapper.find('.row').exists()).toBe(true);
    expect(wrapper.find('p').text()).toBe('You were successfully registered.Check your mailbox for a link to activate your account.');
    expect(wrapper.find('p').length).toEqual(1);
  });
});
