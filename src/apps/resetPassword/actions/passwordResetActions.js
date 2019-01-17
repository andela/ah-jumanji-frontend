import axios from 'axios';
import * as types from './actionTypes';
import config from '../../../config/config';

const emailEndPoint = config.api.emailReset;
const resetEndpoint = config.api.emailResetConfirm;

// Define action generators here
export function resetPassword(email) {
  return {
    "type": types.RESET_PASSWORD,
    "reset_email": email
  };
}

export function formSubmit() {
  return {
    "type": types.FORM_SUBMIT,
    "isFetching": true
  };
}

export function loadSubmitSuccessful(message) {
  return {
    "type": types.SUBMIT_SUCCESSFUL,
    "message": message,
    "isFetching": false
  };
}

export function loadSubmitFailure(message) {
  return {
    "type": types.SUBMIT_FAILED,
    "error": message,
    "isFetching": false
  };
}

export function validateEmail(bool) {
  return {
    "type": types.VALIDATE_EMAIL,
    "valid": bool
  };
}

export function comparePasswords(bool) {
  return {
    "type": types.NON_MATCHING_PASSWORD,
    "state": bool
  };
}

// util functions
const apiCall = async (config, dispatch) => {
  await axios(config).then(response => {
    dispatch(loadSubmitSuccessful(response.data.user.message));
  });
};


// define thunks hers for interacting with the API
export function RequestPasswordReset(email) {
  // a thunk by definition returns a function
  return async function (dispatch) {
    //query configuration object
    const config = {
      method: "post",
      url: emailEndPoint,
      data: {email},
      headers: {
        Accept: "application/json"
      },
    };
    // now query the API
    try {
      await apiCall(config, dispatch);
    } catch (error) {
      if (error.response.hasOwnProperty('data')) {
        dispatch(loadSubmitFailure(error.response.data.user.message));
      }
    }
  };
}

export function RequestResetPassword(token, password) {
  return async function (dispatch) {
    const config = {
      method: "put",
      url: resetEndpoint + token,
      data: {password},
      headers: {
        Accept: "application/json"
      }
    };
    try {
      await apiCall(config, dispatch);
    } catch (error) {
      if (error.response.hasOwnProperty('data')) {
        if (error.response.data.hasOwnProperty('errors')) {
          dispatch(loadSubmitFailure(error.response.data.errors.password));
        } else {
          dispatch(loadSubmitFailure([error.response.data.user.error]));
        }
      }
    }
  };
}





