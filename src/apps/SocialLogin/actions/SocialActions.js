import {
  RECEIVE_CALL,
  FETCH_CALL,
  FETCH_FAILED
} from './actionTypes';


// All auth functions for the social login work
export function FacebookAuth(data) {
  return data;
}

export function GoogleAuth(data) {
  return data;
}

export function TwitterAuth(data) {
  return data;
}

// Informational functions
export function receivedUsers(action) {
  return {
    type: RECEIVE_CALL,
    payload: {
      fetching: false,
      users: action,
      message: "success"
    }
  };
}

export function fetchingCall() {
  return {
    type: FETCH_CALL,
    payload: {
      fetching: true,
      message: "fetching"
    }
  };
}

export function failedCall(error) {
  return {
    type: FETCH_FAILED,
    payload: {
      fetching: false,
      message: error
    }
  };
}
