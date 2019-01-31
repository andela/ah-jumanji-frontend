import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';

import * as delete_actions from './_delete_actions';
import {DELETING_ARTICLE, ERROR_DELETING_ARTICLE, DELETED_ARTICLE} from '../actionTypes';


it('return state data when article is being deleted', () => {
    const passed_payload = {
        article: 'deleting article'
    };
    const returnedData = {
        "payload": {
            "deleted": {"article": "deleting article"},
            "deleting": true
            },
        "type": DELETING_ARTICLE};
    expect(delete_actions.deletingArticle(passed_payload)).toEqual(returnedData);
  });

it('return state data when article is deleted', () => {
    const passed_payload = {
        article: 'deleted article'
    };
    const returnedData = {
        "payload": {
            "deleted": {"article": "deleted article"},
            "posting": false,
            "fetching": false
            },
        "type": DELETED_ARTICLE};
    expect(delete_actions.deletedArticle(passed_payload)).toEqual(returnedData);
  });

it('return state data when article delete is errored', () => {
    const passed_payload = "Cannot delete";
    const returnedData = {
        "payload": "Cannot delete",
        "type": ERROR_DELETING_ARTICLE
    };
    expect(delete_actions.deleteError(passed_payload)).toEqual(returnedData);
  });

  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);

  describe('getDelete actions', () => {

    let  store = mockStore({});
    beforeEach(function () {
      moxios.install();
    store = mockStore({ posts: {} });
    });

    afterEach(function () {
      moxios.uninstall();
    });

    it('creates GET_POSTS_SUCCESS after successfuly fetching postse', () => {
    let getPostsMock = {response: "This is the response"};
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: getPostsMock,
        });
      });

      const expectedActions = [
        { type: DELETING_ARTICLE, payload:{deleted: "this is slug", deleting:true} },
        { type: DELETED_ARTICLE, payload:{deleted: getPostsMock, posting: false, fetching: false}},
        { type: ERROR_DELETING_ARTICLE, payload:"Cannot delete"},
      ];


      return store.dispatch(delete_actions.deleteArticle("this is slug")).then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
