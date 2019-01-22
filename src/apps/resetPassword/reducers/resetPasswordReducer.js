import * as types from '../actions/actionTypes';


export default function resetPasswordReducer(state = {}, action) {
  switch (action.type) {
    case types.RESET_PASSWORD:
      return Object.assign({}, state, {reset_email: action.reset_email});
    case types.SUBMIT_SUCCESSFUL:
      return Object.assign({}, state, {success_message: action.message, last_call: "passed",
          isFetching: action.isFetching});
    case types.SUBMIT_FAILED:
      return Object.assign({}, state, {error_message: action.error, last_call: "failed",
          isFetching: action.isFetching});
    case types.VALIDATE_EMAIL:
      return Object.assign({}, state, {valid_email: action.valid});
    case types.FORM_SUBMIT :
      return Object.assign({}, state, {isFetching: action.isFetching});
    case types.SUBMIT_RESET_LINK:
      return Object.assign({}, state, {reset_link: action.reset_link});
    case types.SUBMIT_RESET_PASSWORD:
      return Object.assign({}, state, {reset_password: action.reset_password});
    case types.NON_MATCHING_PASSWORD:
      return Object.assign({}, state, {matching_passwords: action.state});
    default:
      return state;
  }
}
