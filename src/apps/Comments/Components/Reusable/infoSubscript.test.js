import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import InfoSubscript from "./InfoSubscript";


Enzyme.configure({adapter: new Adapter()});

describe('the subscript button', function () {
  const component = mount(<InfoSubscript text="some text" extraClasses="someClasses" />);
  it('should have props', function () {
    expect(component.prop('text')).toEqual("some text");
    expect(component.prop('extraClasses')).toEqual("someClasses");
  });
});
