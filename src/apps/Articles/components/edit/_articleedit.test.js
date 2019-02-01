import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import Edit from'./_articleedit';

Enzyme.configure({ adapter: new Adapter() });
const middlewares = [thunk];

Enzyme.configure({ adapter: new Adapter() });

describe('EditPage', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Edit debug />);

    expect(component).toMatchSnapshot();
  });
});
