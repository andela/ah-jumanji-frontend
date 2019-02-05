import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';
import moxios from 'moxios';

import * as types from  './actionTypes';
import * as actions from './bookmarksActions';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
    it('should create an action FetchSucess', () => {
        const bookmarks = {};
        const expectedAction = {
          type: types.BOOKMARK_SUCCESS,
          bookmarks: bookmarks
        };
        expect(actions.BookmarkSucess(bookmarks)).toEqual(expectedAction);
    });

});


describe('async actions', () => {

  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });


  it('creates BOOKMARK_SUCCESS after successfuly fetching API and succeeding', () => {
    const bookmarks = [];

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: bookmarks,
      });
    });

    const expectedAction = [{
      type: types.BOOKMARK_SUCCESS,
      bookmarks
    }];

    const store = mockStore({ bookmarks: {} });

    return store.dispatch(actions.postBookmark()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

});
