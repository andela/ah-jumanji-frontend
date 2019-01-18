import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';
import moxios from 'moxios';


import * as types from '../actions/actionTypes';
import * as actions from '../actions/passwordResetActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('api calls to the API ', () => {

  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('should create a SUBMIT_SUCCESSFUL after requesting password reset', function () {

    const success_message = "A password reset email has been sent to your account!";

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          "user": {
            "message": success_message
          }
        },
      });
    });

    const expectedAction = [
        {
          "isFetching": false,
          "message": success_message,
          "type": types.SUBMIT_SUCCESSFUL
        }
      ]
    ;

    const store = mockStore({user: {}});

    return store.dispatch(actions.RequestPasswordReset('fgkinus@gmail.com')).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedAction);
    });

  });

  it('should create a SUBMIT_Failure after requesting password reset', function () {

    const error_message = "Could not find that email address!";

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404,
        response: {
          "user": {
            "message": error_message
          }
        },
      });
    });

    const expectedAction = [
        {
          "isFetching": false,
          "error": error_message,
          "type": types.SUBMIT_FAILED
        }
      ]
    ;

    const store = mockStore({user: {}});

    return store.dispatch(actions.RequestPasswordReset('fgkinus@gmail.co')).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedAction);
    });

  });

  it('should create a SUBMIT_SUCCESSFUL after submitting invalid password reset', function () {

    const error_message = [undefined];

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: {
          "user": {
            "message": error_message
          }
        },
      });
    });

    const expectedAction = [
        {
          "isFetching": false,
          "error": error_message,
          "type": types.SUBMIT_FAILED
        }
      ]
    ;

    const store = mockStore({user: {}});
    const token = "nfdsmlkfmnjocksmf.mvlk;,a/,dlv;kjdkfma/;'djfnfm.cmlml;vs";
    const password = "pass";

    return store.dispatch(actions.RequestResetPassword(token, password)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedAction);
    });

  });


});

