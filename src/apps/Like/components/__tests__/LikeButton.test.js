import React from 'react';
import Enzyme, {mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';
import configureStore from 'redux-mock-store';

import LikeButton from "../LikeButton";
import {initialState} from "../../reducers/likeReducer";

Enzyme.configure({adapter: new Adapter()});
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const shallowWithStore = (component, store) => {
  const context = {
    store,
  };
  return shallow(component, {context});
};

describe('<LikeButton />', () => {
  it('should match the snapshot', () => {
    const component = shallow(<LikeButton debug />);
    expect(component).toMatchSnapshot();
  });
});

describe('<LikeButton />', () => {
  let store;
  let wrapper;

  const props = {
    likeCount: 2,
    liked: true,
    reactions: [],
    addLikes: jest.fn(),
    getArticleLikes: jest.fn(),
    fetchLikers: jest.fn(),
  };

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <LikeButton {...props} />
        </MemoryRouter>
      </Provider>
    );
    // wrapper = mountWithStore(<LikeButton {...props} />, store);
  });

  it('renders without crashing', () => {
    shallowWithStore(<LikeButton />, store);
  });

  it('renders the renders the thumbs up icon', () => {
    expect(wrapper.find('i').exists()).toBe(true);
  });

  it('calls the handleLike function', () => {
    const button = wrapper.find('i').first().simulate('click');
    expect(button.length).toBe(1);
  });
});
