import React from 'react';

import Enzyme, { shallow, mount } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router-dom';
import {Provider} from "react-redux";
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import Bookmarks from './Bookmarks';

Enzyme.configure({ adapter: new Adapter() });

const middlewares = [thunk];
const mockStore = configureStore(middlewares);


describe('<Bookmarks />', () => {
  it('should match the snapshot', () => {
    const component = shallow(<Bookmarks debug />);
    expect(component).toMatchSnapshot();
  });
});



describe('components', () => {
  describe('Bookmarks', () => {
    it('should render self and subcomponents', () => {
      const store = mockStore({});
      const enzymeWrapper = mount(
        <Provider store={store}>
          <MemoryRouter>
            <Bookmarks />
          </MemoryRouter>
        </Provider>,);
      expect(enzymeWrapper.find('Bookmarks')).toBeDefined();
      expect(enzymeWrapper.find('div')).toHaveLength(5);
    });
});
});
