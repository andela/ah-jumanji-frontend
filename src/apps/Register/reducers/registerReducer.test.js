import registerReducer from "./registerReducer";
import * as types from '../actions/registerTypes';

describe('resister reducers', () => {
  const state = {
    user: {}
  };
  it('should return the initial state', () => {
    expect(registerReducer(undefined, {})).toEqual(state);
  });

  it('should handle REGISTER_USER', () => {
    expect(registerReducer(state, {})).toEqual(state);
  });

  it('should handle REGISTER_SUCCESS', () => {
    const action = {
      type: types.REGISTER_SUCCESS,
      payload: {
        username: 'masha',
        email: 'masha@gmail.com',
        password: 'Masha12#'
      }
    };

    const expectedState = {
      username: 'masha',
      email: 'masha@gmail.com',
      password: 'Masha12#'
    };
    expect(registerReducer({}, action)).toEqual(expectedState );
  });

  it('should handle REGISTER_FAIL', () => {
    const action = {
      type: types.REGISTER_FAIL
    };
    expect(registerReducer({}, action)).toEqual({});
  });
});
