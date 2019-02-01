import React from 'react';

import Enzyme, { shallow, mount } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

import { MemoryRouter } from 'react-router-dom';
import {Provider} from "react-redux";
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import DropDownNotification from './NavDropDownNotification';

Enzyme.configure({ adapter: new Adapter() });
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('<DropDownNotification />', () => {
  it('should match the snapshot', () => {
    const component = shallow(<DropDownNotification debug />);
    expect(component).toMatchSnapshot();
  });
});

describe('DropDownNotification', () => {
  it('should render self and subcomponents', () => {
    const store = mockStore({});
    const enzymeWrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <DropDownNotification />
        </MemoryRouter>
      </Provider>,);
    expect(enzymeWrapper.find('DropDownNotification')).toBeDefined();
    expect(enzymeWrapper.find('img')).toHaveLength(1);
  });
});
