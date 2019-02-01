import React from 'react';
import Enzyme, {mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';
import configureStore from 'redux-mock-store';

import {initialState} from "../../reducers/likeReducer";
import LikesViewContainer from "../LikesViewContainer";

Enzyme.configure({adapter: new Adapter()});
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('<LikesViewContainer />', () => {
  it('should match the snapshot', () => {
    const component = shallow(<LikesViewContainer debug />);
    expect(component).toMatchSnapshot();
  });
});

describe('<LikeViewContainer />', () => {
  let store;
  let wrapper;

  const props = {
    likeCount: 2,
    liked: true,
    reactions: [
      {
        article: "mr-ruby",
        reaction: "1",
        user: {
          username: "Masha",
          bio: "",
          profile_pic: ""
        }
      }
    ],
    slug: 'mr-python',
    addLikes: jest.fn(),
    getArticleLikes: jest.fn(),
    fetchLikers: jest.fn(),
  };

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <LikesViewContainer {...props} />
        </MemoryRouter>
      </Provider>
    );
  });

  it('renders without crashing', () => {
    const snapShot = shallow(<LikesViewContainer />);
    expect(snapShot).toMatchSnapshot();
  });
});
