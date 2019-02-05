import thunk from 'redux-thunk';
import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';

import * as types from  './types';
import * as actions from './followActions';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('follow actions', () => {
    it('should create an action Follow', () => {
        const user = {
            "user": "test.user"
        };
        const expectedAction = {
          type: types.FOLLOW,
          user
        };
        expect(actions.follow(user)).toEqual(expectedAction);
    });

    it('should create an action unFollow', () => {
        const message = {
            "message": "You have unfollowed test.user"
        };
        const expectedAction = {
          type: types.UNFOLLOW,
          message
        };
        expect(actions.unfollow(message)).toEqual(expectedAction);
    });

    it ('should create an action myfollowers', () => {
        const followers = {
            "user": "test.user"
        };
        const expectedAction = {
          type: types.GET_FOLLOWERS,
          followers
        };
        expect(actions.myFollowers(followers)).toEqual(expectedAction);
    });

    it ('should create an action myfollowing', () => {
      const followed = {
          "user": "test.user"
      };
      const expectedAction = {
        type: types.GET_FOLLOWED,
        followed
      };
      expect(actions.myFollowed(followed)).toEqual(expectedAction);
  });
});


describe('Follow actions request', () => {

  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });


  it('follows an author successfully', () => {
    const user = {
        "user": "test.user"
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: user
      });
    });

    const expectedAction = [{
      type: types.FOLLOW,
      user
    }];

    const store = mockStore();

    return store.dispatch(actions.followUser(user)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
  it('fetches followers successfully', () => {
    const followers = {
      "user": "test.user"
  };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: followers
      });
    });

    const expectedAction = [{
      type: types.GET_FOLLOWERS,
      followers
    }];

    const store = mockStore();

    return store.dispatch(actions.getFollowers(followers)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
  it('fetches following successfully', () => {
    const followed = {
      "user": "test.user"
  };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: followed
      });
    });

    const expectedAction = [{
      type: types.GET_FOLLOWED,
      followed
    }];

    const store = mockStore();

    return store.dispatch(actions.getFollowed(followed)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});