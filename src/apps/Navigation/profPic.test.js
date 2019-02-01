import React from 'react';

import Enzyme, { shallow, mount } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

import { MemoryRouter } from 'react-router-dom';
import {Provider} from "react-redux";
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import ProfPic from './profPic';

Enzyme.configure({ adapter: new Adapter() });
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('<ProfPic />', () => {
  it('should match the snapshot', () => {
    const component = shallow(<ProfPic debug />);
    expect(component).toMatchSnapshot();
  });
});

describe('ProfPic', () => {
  it('should render self and subcomponents', () => {
    const store = mockStore({});
    const enzymeWrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <ProfPic />
        </MemoryRouter>
      </Provider>,);
    expect(enzymeWrapper.find('ProfPic')).toBeDefined();
    expect(enzymeWrapper.find('button')).toHaveLength(1);
  });
});
