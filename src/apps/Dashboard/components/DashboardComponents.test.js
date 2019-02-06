import React from 'react';

import Enzyme, { shallow, mount } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router-dom';
import {Provider} from "react-redux";
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import Articles from './Articles';
import LoaderData from '../../common/components/LoaderData';
import DashboardContainer from './DashboardContainer';
import ArticleLikesButton from './ArticleLikes';

Enzyme.configure({ adapter: new Adapter() });

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('components', () => {
  describe('Articles', () => {
    it('should render self and subcomponents', () => {
      const store = mockStore({});
      const props = {
        articles: {
          articles: ""
        }
      };
      const enzymeWrapper = mount(
        <Provider store={store}>
          <MemoryRouter>
            <Articles {...props} />
          </MemoryRouter>
        </Provider>,);
      expect(enzymeWrapper.find('Articles')).toBeDefined();
      expect(enzymeWrapper.find('div')).toHaveLength(331);
      expect(enzymeWrapper.contains(<LoaderData />)).toBe(true);
    });
});
});


describe('<Articles />', () => {
  it('should match the snapshot', () => {
    const component = shallow(<Articles debug />);
    expect(component).toMatchSnapshot();
  });
});

describe('<ArticleLikesButton />', () => {
  it('should match the snapshot', () => {
    const component = shallow(<ArticleLikesButton debug />);
    expect(component).toMatchSnapshot();
  });
});

describe('components', () => {
  describe('DashboardContainer', () => {
    it('should render self and subcomponents', () => {
      const store = mockStore({});
      const enzymeWrapper = mount(
        <Provider store={store}>
          <MemoryRouter>
            <DashboardContainer currentPage={1} />
          </MemoryRouter>
        </Provider>,);
      expect(enzymeWrapper.find('DashboardContainer')).toBeDefined();
      expect(enzymeWrapper.find('div')).toHaveLength(333);
    });
});
});
