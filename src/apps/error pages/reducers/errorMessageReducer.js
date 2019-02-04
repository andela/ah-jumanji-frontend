import * as types from '../actions/actionTypes';

export default function ErrorHandlingReducer(state = {}, action) {
  switch (action.type) {
    case types.NEW_ERROR_RAISED:
      return Object.assign({}, state, action);
    default:
      return state;
  }
}
