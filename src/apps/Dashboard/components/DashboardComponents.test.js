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
import ArticleComponent from './ArticleComponent';

Enzyme.configure({ adapter: new Adapter() });

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('components', () => {
  describe('Articles', () => {
    it('should render self and subcomponents', () => {
      const store = mockStore({});
      const enzymeWrapper = mount(
        <Provider store={store}>
          <MemoryRouter>
            <Articles />
          </MemoryRouter>
        </Provider>,);
      expect(enzymeWrapper.find('Articles')).toBeDefined();
      expect(enzymeWrapper.find('div')).toHaveLength(330);
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

describe('components', () => {
  describe('DashboardContainer', () => {
    it('should render self and subcomponents', () => {
      const store = mockStore({});
      const enzymeWrapper = mount(
        <Provider store={store}>
          <MemoryRouter>
            <DashboardContainer />
          </MemoryRouter>
        </Provider>,);
      expect(enzymeWrapper.find('DashboardContainer')).toBeDefined();
      expect(enzymeWrapper.find('div')).toHaveLength(332);
      expect(enzymeWrapper.contains(<Articles />)).toBe(true);
    });
});
});


describe('components', () => {
  describe('ArticleComponent', () => {
    it('should render self and subcomponents', () => {
      const store = mockStore({});
      const enzymeWrapper = mount(
        <Provider store={store}>
          <MemoryRouter>
            <ArticleComponent />
          </MemoryRouter>
        </Provider>,);
      expect(enzymeWrapper.find('ArticleComponent')).toBeDefined();
      expect(enzymeWrapper.find('div')).toHaveLength(13);
    });
});
});
