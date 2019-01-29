import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';
import moxios from 'moxios';

import * as types from  './actionTypes';
import * as actions from './loginActions';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
    it('should create an actions LoginSucess', () => {
        const user = {"user": {"email": "test@gmail.com", "password": "testpass"}};
        const expectedAction = {
          type: types.LOGIN_SUCCESS,
          user
        };
        expect(actions.LoginSucess(user)).toEqual(expectedAction);
    });

    it ('should create an actions LoginFailed', () => {
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

    const store = mockStore({ user: {} });

    return store.dispatch(actions.authenticateUser()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
