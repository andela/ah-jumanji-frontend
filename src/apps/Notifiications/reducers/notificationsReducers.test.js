import notificationReducer from './noticationsReducers';
import * as types from '../actions/actions';

describe('notifications reducer', () => {

  it('should return the initial state', () => {
    expect(
      notificationReducer({}, {})).toEqual({});
  });

  it('should handle GET_UNREAD_NOTIFICATIONS', () => {
    const action = {
      type: types.GET_UNREAD_NOTIFICATIONS
    };

    const expectedState = {"type": "GET_UNREAD_NOTIFICATIONS"};

    expect( notificationReducer( {}, action )).toEqual(expectedState );
  });

  it('should handle GET_READ_NOTIFICATIONS', () => {
    const action = {
      type: types.GET_READ_NOTIFICATIONS
    };

    const expectedState = {"type": "GET_READ_NOTIFICATIONS"};

    expect( notificationReducer( {}, action )).toEqual(expectedState );
  });

  it('should handle GET_SPECIFIC_NOTIFICATION', () => {
    const action = {
      type: types.GET_SPECIFIC_NOTIFICATION
    };

    const expectedState = {"type": "GET_SPECIFIC_NOTIFICATION"};

    expect( notificationReducer( {}, action )).toEqual(expectedState );
  });

  it('should handle MARK_AS_READ', () => {
    const action = {
      type: types.MARK_AS_READ
    };

    const expectedState = {"type": "MARK_AS_READ"};

    expect( notificationReducer( {}, action )).toEqual(expectedState );
  });

  it('should handle MARK_AS_UNREAD', () => {
    const action = {
      type: types.MARK_AS_UNREAD
    };

    const expectedState = {"type": "MARK_AS_UNREAD"};

    expect( notificationReducer( {}, action )).toEqual(expectedState );
  });

  it('should handle FORM_SUBMIT', () => {
    const action = {
      type: types.FORM_SUBMIT
    };

    const expectedState = {};

    expect( notificationReducer( {}, action )).toEqual(expectedState );
  });

  it('should handle FETCH_NOTIFICATIONS_SUCCESSFUL', () => {
    const action = {
      type: types.FETCH_NOTIFICATIONS_SUCCESSFUL
    };

    const expectedState = {"isFetching": undefined, "last_call": "passed", "success_message": undefined};

    expect( notificationReducer( {}, action )).toEqual(expectedState );
  });

  it('should handle FETCH_NOTIFICATIONS_FAILED', () => {
    const action = {
      type: types.FETCH_NOTIFICATIONS_FAILED
    };

    const expectedState = {"error_message": undefined, "isFetching": undefined, "last_call": "failed"};

    expect( notificationReducer( {}, action )).toEqual(expectedState );
  });

  // it('should handle BOOKMARK_FAIL', () => {
  //   const action = {
  //     type: types.BOOKMARK_FAILED
  //   };
  //   expect(bookmarksReducer({}, action)).toEqual({});
  // });

});
