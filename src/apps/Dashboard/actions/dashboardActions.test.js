import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';
import moxios from 'moxios';

import * as types from  './actionTypes';
import * as actions from './dashboardActions';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
    it('should create an action FetchSucess', () => {
        const articles = {};
        const expectedAction = {
          type: types.FETCH_SUCCESS,
          articlesData: articles
        };
        expect(actions.FetchSucess(articles)).toEqual(expectedAction);
    });


});


describe('async actions', () => {

  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });


  it('creates FETCH_SUCCESS after successfuly fetching API and succeeding', () => {
    const articles = [];
    const articlesData = [];

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: articles,
      });
    });

    const expectedAction = [{
      type: types.FETCH_SUCCESS,
      articlesData
    }];

    const store = mockStore({ articles: {} });

    return store.dispatch(actions.fetchArticle()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

});
