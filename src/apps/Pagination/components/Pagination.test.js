import React from 'react';
import Enzyme, {mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import Pagination from "./Pagination";
import PropTypes from "prop-types";

Enzyme.configure({adapter: new Adapter()});
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const shallowWithStore = (component, store) => {
  const context = {
    store,
  };
  return shallow(component, {context});
};

const props = {
    totalRecords: 20,
    pageLimit: 5,
    pageNeighbours: 1,
    onPageChanged: jest.fn()
  };

describe('<Pagination />', () => {
  it('should match the snapshot', () => {
    const component = shallow(<Pagination {...props} debug />);
    expect(component).toMatchSnapshot();
  });
});

describe('<Pagination />', () => {
  let store;
  let wrapper;

  const props = {
    totalRecords: 20,
    pageLimit: 5,
    pageNeighbours: 1,
    onPageChanged: jest.fn()
  };
  const initialState = {};

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <Pagination {...props} />
        </MemoryRouter>
      </Provider>
    );
  });

  it('renders without crashing', () => {
    shallowWithStore(<Pagination {...props} />, store);
  });

  it('should render the component correctly', () => {
    expect(wrapper.find('.pagination').exists()).toBe(true);
    expect(wrapper.find('button').exists()).toBe(true);
  });

});
