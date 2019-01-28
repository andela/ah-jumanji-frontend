import dashboardReducer from './dashboardReducer';
import * as types from '../actions/actionTypes';

describe('dashboard reducer', () => {

  it('should return the initial state', () => {
    expect(
      dashboardReducer(undefined, {})).toEqual({});
  });

  it('should handle FETCH_SUCCESS', () => {
    const action = {
      type: types.FETCH_SUCCESS,
      user: {}
    };

    const expectedState = { };

    expect( dashboardReducer( { }, action )).toEqual(expectedState );
  });

  it('should handle FETCH_FAIL', () => {
    const action = {
      type: types.FETCH_FAILED
    };
    expect(dashboardReducer({}, action)).toEqual({});
  });

});
