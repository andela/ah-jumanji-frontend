import thunk from 'redux-thunk';
import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';

import * as types from  './types';
import * as actions from './profile';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('viewauthorProfile action', () => {
    it('should create an action VIEW_AUTHOR_PROFILE', () => {
        const author_profile = {
            "user": "test.user",
            "bio": "I am a test user"
        };
        const expectedAction = {
          type: types.VIEW_AUTHOR_PROFILE,
          author_profile
        };
        expect(actions.viewAuthorProfile(author_profile)).toEqual(expectedAction);
    });
});


describe('rating actions request', () => {

  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });


  it('fetches author profile', () => {

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200
      });
    });

    const expectedAction = [{
      type: types.VIEW_AUTHOR_PROFILE
    }];

    const store = mockStore();

    return store.dispatch(actions.fetchAuthorProfile()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});