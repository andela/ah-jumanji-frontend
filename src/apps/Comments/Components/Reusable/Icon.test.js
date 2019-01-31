import React from 'react';
import Enzyme, {mount} from 'enzyme';
import sinon from "sinon";
import Adapter from 'enzyme-adapter-react-16';
import Icon from "./Icon";

Enzyme.configure({adapter: new Adapter()});

describe('the icon button should be clickable', function () {
  const onButtonClick = sinon.spy();
  const component = mount(<Icon id='identity' iconType='btn' onClick={onButtonClick} />);
  it('should be clickable', function () {
    component.find('i').simulate('click');
    expect(onButtonClick).toHaveProperty('callCount', 1);
  });
});
