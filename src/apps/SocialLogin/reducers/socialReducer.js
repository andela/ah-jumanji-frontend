import {
  FACEBOOK,
  GOOGLE,
  TWITTER,
  RECEIVE_CALL,
  FETCH_CALL,
  FETCH_FAILED,
} from '../actions/actionTypes';

export default function socialAuthFunc(state = {}, action) {

  switch (action.type) {

    // sample state update function
    case FACEBOOK:
        return Object.assign({}, state, action.payload);

    case GOOGLE:
        return Object.assign({}, state, action.payload);

    case TWITTER:
        return Object.assign({}, state, action.payload);

    case RECEIVE_CALL:
        return Object.assign({}, state, action.payload);

      case FETCH_CALL:
        return Object.assign({}, state, action.payload);

    case FETCH_FAILED:
        return Object.assign({}, state, action.payload);

    default:
        return state;
  }
}
