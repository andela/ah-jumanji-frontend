import thunk from 'redux-thunk';
import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';

import * as types from  './actionTypes';
import * as actions from './ratingActions';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('rating actions', () => {
    it('should create an action addRatingSuccess', () => {
        const rating = {"rating": "4"};
        const expectedAction = {
          type: types.ADD_RATING_SUCCESS,
          rating
        };
        expect(actions.addRatingSucess(rating)).toEqual(expectedAction);
    });

    it('should create an action addRatingFailed', () => {
        const rating_message = {"message": "You cannot rate your own article"};
        const expectedAction = {
          type: types.ADD_RATING_FAILED,
          rating_message
        };
        expect(actions.addRatingFailed(rating_message)).toEqual(expectedAction);
    });
    it('should create an action fetchAverageRating', () => {
        const average_rating = {"rating": "4.6"};
        const expectedAction = {
          type: types.FETCH_AVERAGE_RATING,
          average_rating
        };
        expect(actions.fetchAverageRating(average_rating)).toEqual(expectedAction);
    });

});


describe('rating actions request', () => {

  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });


  it('adds Rating Successfully', () => {
    const rating = {"rating": "4"};
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 201,
        response: rating,
      });
    });

    const expectedAction = [{
      type: types.ADD_RATING_SUCCESS,
      rating
    }];

    const store = mockStore();

    return store.dispatch(actions.postArticleRating(rating)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('fetches average rating', () => {

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200
      });
    });

    const expectedAction = [{
      type: types.FETCH_AVERAGE_RATING
    }];

    const store = mockStore();

    return store.dispatch(actions.fetchArticleRating()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});