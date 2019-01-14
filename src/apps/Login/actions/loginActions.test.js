import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as types from  './actionTypes';
import * as actions from './loginActions';
import fetchMock from 'fetch-mock'
import expect from 'expect' // You can use any testing library

import moxios from 'moxios';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

// const endpoint ='https://ah-jumanji-staging.herokuapp.com/api/users/login';

describe('actions', () => {
    it('should create an action LoginSucess', () => {
        const user = {"user": {"email": "test@gmail.com", "password": "testpass"}};
        const expectedAction = {
          type: types.LOGIN_SUCCESS,
          user
        };
        expect(actions.LoginSucess(user)).toEqual(expectedAction);
    });

    it ('should create an action LoginFailed', () => {
        const error_message = "A user with this email and password was not found";
        const expectedAction = {
        type: types.LOGIN_FAILED,
        error_message
      };
      expect(actions.LoginFailed(error_message)).toEqual(expectedAction);
    });

});


describe('async actions', () => {

  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('creates LOGIN_FAILED after successfuly fetching API and failing', () => {
    const error_message = "A user with this email and password was not found";

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: error_message,
      });
    });

    const expectedAction = [{
         type: types.LOGIN_FAILED,
         error_message
    }];

    const store = mockStore({ user: {} })

    return store.dispatch(actions.authenticateUser()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('creates LOGIN_SUCCESS after successfuly fetching API and succeeding', () => {
    const user = {"user": {"email": "test@gmail.com", "password": "testpass"}};

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: user,
      });
    });

    const expectedAction = [{
      type: types.LOGIN_SUCCESS,
      user
    }];

    const store = mockStore({ user: {} })

    return store.dispatch(actions.authenticateUser()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
