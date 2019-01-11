import loginUserReducer from './loginReducer';
import * as types from '../actions/actionTypes';

describe('login reducer', () => {

  it('should return the initial state', () => {
    expect(
      loginUserReducer(undefined, {})).toEqual({});
  });


    it('should handle LOGIN_SUCCESS', () => {
      const action = {
        type: types.LOGIN_SUCCESS,
        user: {
          email: 'beja.emmanuel@gmail.com',
          password: '12345678'
        }
      };

      //const expectedState = {
      //  email: 'beja.emmanuel@gmail.com',
      //  password: '12345678'
      //};

      // test if it returns the correct state
      expect(loginUserReducer(undefined, action)).toMatchSnapshot();

      //expect( loginUserReducer( { action })).toEqual([ expectedState ]);
    });

});
