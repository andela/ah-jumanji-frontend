import React from 'react';
import {shallow} from 'enzyme';
import ShallowRenderer from 'react-test-renderer/shallow';
import Button from './_components';

it("Should render a button", ()=>{
    // in your test:
    const renderer = new ShallowRenderer();
    renderer.render(<Button />);
    const result = renderer.getRenderOutput();

    expect(result.type).toBe('li');
});

it('find elements in component', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.find('.publish-nav-item')).toHaveLength(1);
    expect(wrapper.find('li')).toHaveLength(1);
    expect(wrapper.find('a')).toHaveLength(1);
});

it('simulate components interactions', () => {
    const wrapper = shallow(<Button />);
    wrapper.find('a').simulate('click');
    expect(wrapper.find('a').length).toEqual(1);
});

describe('simulating another call', () => {
    it('Expect onButtonPressed to be called on button click', () => {
      const onButtonPressed = jest.fn();
      const onClickingButton = jest.fn(() => {
        onButtonPressed();
      });

      const wrapper = shallow(<Button onChange={onClickingButton} />); // Passing the mocked onChangeImage as prop
      wrapper.find('a').simulate('click');

      expect(onButtonPressed).not.toBeCalled();
    });
  });