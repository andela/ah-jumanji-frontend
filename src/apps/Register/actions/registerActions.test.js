import thunk from 'redux-thunk';
import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';

import * as types from './registerTypes';
import * as actions from './registerActions';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const registerResponse = {
  "user": {"payload": {
    "user": {
      "email": "masha@test.com",
      "password": "Test123#",
      "username": "masha"}}}
};

describe('Register actions', () => {
  it('should dispatch type REGISTER_SUCCESS', () => {
    const expectedAction = {
      type: types.REGISTER_SUCCESS,
      registerResponse
    };
    expect(actions.RegisterSuccess(registerResponse)).toEqual(expectedAction);
  });

  it('should dispatch type REGISTER_FAIL', () => {
    const error = "The username already exists. Kindly try another.";
    const expectedAction = {
      type: types.REGISTER_FAIL,
      payload: error
    };
    expect(actions.RegisterFail(error)).toEqual(expectedAction);
  });

});

describe('Mocking register request', () => {
  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

 it('should create REGISTER_SUCCESS action', () => {
   moxios.wait(() => {
     let request = moxios.requests.mostRecent();
     request.respondWith({
       status: 201,
       response: registerResponse
     });
   });

   const expectedAction = [
     {type: types.REGISTER_SUCCESS, registerResponse}
     ];

   const store = mockStore({ registerResponse: {} });

   return store.dispatch(actions.RegisterUser(registerResponse)).then(() => {
     expect(store.getActions()).toEqual(expectedAction);
   });
 });
});
