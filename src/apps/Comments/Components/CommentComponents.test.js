import React from 'react';
import Enzyme, {mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';
import configureStore from 'redux-mock-store';

import CommentComponent from "./Comment";
import {initialState} from "../Reducers/CommentListReducer";

Enzyme.configure({adapter: new Adapter()});
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const shallowWithStore = (component, store) => {
  const context = {
    store,
  };
  return shallow(component, {context});
};

const fakeComment = {
  "id": 100,
  "author": {
    "username": "dmithamo",
    "image": "",
  },
  "body": "fake body"
};

describe('<CommentComponent />', () => {
  it('render all expected bits of a commnet', () => {
    const component = shallow(<CommentComponent comment={fakeComment} />);
    expect(component).toMatchSnapshot();
  });
});

describe('<CommentComponent />', () => {
  let store;
  let wrapper;

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <CommentComponent comment={fakeComment} />
        </MemoryRouter>
      </Provider>
    );
  });

  it('renders without crashing', () => {
    shallowWithStore(<CommentComponent comment={fakeComment} />, store);
  });

  it('renders the body of the comment ', () => {
    const commBody = wrapper.find('.comment-body').first().text();
    expect(commBody).toEqual(fakeComment.body);
  });

  it('renders the prof pic of the user', () => {
    const img = wrapper.find('.img').first();
    expect(img).toBeTruthy;
  });

});