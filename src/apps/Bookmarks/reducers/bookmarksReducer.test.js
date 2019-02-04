import bookmarksReducer, { initialState } from './bookmarksReducer';
import * as types from '../actions/actionTypes';

describe('bookmarks reducer', () => {

  it('should return the initial state', () => {
    expect(
      bookmarksReducer(initialState, {})).toEqual(initialState);
  });

  it('should handle BOOKMARK_SUCCESS', () => {
    const action = {
      type: types.BOOKMARK_SUCCESS,
      bookmarks: initialState
    };

    const expectedState = {"bookmarks": initialState};

    expect( bookmarksReducer( {}, action )).toEqual(expectedState );
  });

  it('should handle BOOKMARK_FAIL', () => {
    const action = {
      type: types.BOOKMARK_FAILED
    };
    expect(bookmarksReducer({}, action)).toEqual({});
  });

});
