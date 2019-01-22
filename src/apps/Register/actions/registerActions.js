import axios from 'axios';
import { toast } from 'react-toastify';
import * as types from './registerTypes';

import config from '../../../config/config';

const registerUrl = config.api.registerUrl;
const activateUserUrl = config.api.activateUserUrl;

const successMessage = "Successfully registered!";

export const RegisterSuccess = (registerResponse) => ({
  type: types.REGISTER_SUCCESS,
  registerResponse
});

export const RegisterFail = (responseError) => ({
  type: types.REGISTER_FAIL,
  responseError
});

export const RegisterUser = (userData) => {
  return function (dispatch) {
    return axios.post(registerUrl, userData, {
      headers: {
        Accept: 'application/json'}
    })
      .then(response => {
        dispatch(RegisterSuccess(response.data));
        // Remove all pop-ups
        toast.dismiss();
        toast.success(successMessage, {autoClose: 5000});
        setTimeout(function () {
          window.location.replace('/register-redirect');
        }, 5000);
      })
      .catch(error => {
        let errors = Object.entries(error.response.data.errors);
        // Remove all pop-ups
        toast.dismiss();
        errors.map( err => {
          // Display warnings beneath affected inputs
          let associatedInput = document.querySelector(`input[name=${err[0]}]`);
          let inputSubscript = associatedInput.parentElement.querySelector("p");
          associatedInput.classList.add('highlight-error-input');

          inputSubscript.classList.remove("hidden");
          inputSubscript.classList.add("subscript-error");
          inputSubscript.innerHTML = err[1];
        });
        dispatch(RegisterFail(error.response.data));
      });
  };
};

export const ActivateUser = (uid, token) => {
  const activateWithPayload = `${activateUserUrl}/${uid}/${token}`;
  return axios.get(activateWithPayload, {
    headers: {
      Accept: 'application/json'}
  })
    .then(response => {
      // Log success
      // eslint-disable-next-line no-console
      console.log(response);
    })
    .catch(error => {
      // Log error
      // eslint-disable-next-line no-console
      console.log(error);
    });
};
