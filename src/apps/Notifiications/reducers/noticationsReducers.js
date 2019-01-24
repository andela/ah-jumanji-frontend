import * as types from '../actions/actions';

export default function notificationReducer(state = {}, action) {
  switch (action.type) {
    case types.GET_UNREAD_NOTIFICATIONS:
      return Object.assign({}, state, action);
    case types.GET_READ_NOTIFICATIONS:
      return Object.assign({}, state, action);
    case types.MARK_AS_UNREAD:
      return Object.assign({}, state, action);
    case types.MARK_AS_READ:
      return Object.assign({}, state, action);
    case types.GET_SPECIFIC_NOTIFICATION:
      return Object.assign({}, state, action);
    case types.FETCH_NOTIFICATIONS_SUCCESSFUL:
      return Object.assign({}, state, {
        success_message: action.message, last_call: "passed",
        isFetching: action.isFetching
      });
    case types.FETCH_NOTIFICATIONS_FAILED:
      return Object.assign({}, state, {
        error_message: action.error, last_call: "failed",
        isFetching: action.isFetching
      });
    default:
      return state;
  }
}
