import axios from 'axios';
import { toast } from 'react-toastify';
import * as types from './registerTypes';

const registerUrl = process.env.baseUrl + process.env.registerEndpoint;
const activateUserUrl = process.env.baseUrl + process.env.activateUserUrl;

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
        // Call notifier
        // ...but first remove all other notifications
        toast.dismiss();
        toast.success(successMessage, {autoClose: 5000});
        setTimeout(function () {
          window.location.replace('/register-redirect');
        }, 5000);
      })
      .catch(error => {
        let errors = Object.entries(error.response.data.errors);
        // Call notifier
        // ...but first remove all other notifications
        toast.dismiss();
        errors.map( err => {
          toast.error(err[1][0], {
            autoClose: 25000
          });
        });
        dispatch(RegisterFail(error.response.data));
      });
  };
};

export const ActivateUser = (uid, token) => {
  const activateWithPayload = activateUserUrl + uid + token;
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
      let errors = Object.entries(error.response.data.errors);
      // Log errors
      // eslint-disable-next-line no-console
      console.log(errors);
    });
};
