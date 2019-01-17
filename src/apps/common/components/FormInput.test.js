import React from 'react';

import Enzyme, { shallow, mount } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

import jest from 'jest-mock';

import {FormInput} from './FormInput';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    inputType: "text",
    inputName: "email",
    placeholder: "Enter Email",
    label: "email",
    onChange: jest.fn(),
  };

  const enzymeWrapper = shallow(<FormInput {...props} />);
  const mountedEnzymeWrapper = mount(<FormInput {...props} />);

  return {
    props,
    enzymeWrapper,
    mountedEnzymeWrapper
  };
}

describe('components', () => {
  describe('FormInput', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup();
      const expectedProps = {
           "type": "text",
           "className": "form-control",
           "name": "email",
           "placeholder": "Enter Email",
           "required": true
        };

      expect(enzymeWrapper.find('div').hasClass('form-group')).toBe(true);
      expect(enzymeWrapper.find('input').hasClass('form-control')).toBe(true);
      const inputProps = enzymeWrapper.find('input').props();
      expect(JSON.stringify(inputProps)).toEqual(JSON.stringify(expectedProps));
    });


    it('should call onChange function when input changes', () => {
        // mock onChange
        // simulate onChange
        // assert onChange was called
        const { mountedEnzymeWrapper, props } = setup();
        mountedEnzymeWrapper.find('input').simulate('change');
        expect(props.onChange).toHaveBeenCalledTimes(1);
    });
});
});
