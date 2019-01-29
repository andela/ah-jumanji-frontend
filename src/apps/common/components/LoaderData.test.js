import React from 'react';

import Enzyme, { shallow, mount } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router-dom';
import {Provider} from "react-redux";
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import LoaderData from './LoaderData';

Enzyme.configure({ adapter: new Adapter() });

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('components', () => {
  describe('LoaderData', () => {
    it('should render self and subcomponents', () => {
      const store = mockStore({});
      const enzymeWrapper = mount(
        <Provider store={store}>
          <MemoryRouter>
            <LoaderData />
          </MemoryRouter>
        </Provider>,);
      expect(enzymeWrapper.find('LoaderData')).toBeDefined();
      expect(enzymeWrapper.find('div')).toHaveLength(330);
      expect(enzymeWrapper.find('span').hasClass('loader-data')).toBe(true);
    });
});
});

describe('<LoaderData />', () => {
  it('should match the snapshot', () => {
    const component = shallow(<LoaderData debug />);
    expect(component).toMatchSnapshot();
  });
});
