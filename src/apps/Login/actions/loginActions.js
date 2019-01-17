import axios from 'axios';

import { bake_cookie } from 'sfcookies';

import { toast } from 'react-toastify';

import * as types from  './actionTypes';

import config from '../../../config/config';

const endpoint = config.api.loginUrl;

export function LoginSucess(user){
    return {
        type: types.LOGIN_SUCCESS,
        user
    };
}

export function LoginFailed(error_message){
    return {
        type: types.LOGIN_FAILED,
        error_message
    };
}

export function authenticateUser(userData) {
    return function (dispatch) {
        return axios.post(endpoint,
        userData, {
          headers: {
            Accept: 'application/json'
          }
        })
        .then(res => {
            const token = res.data.user.token;

            // add token in cookie.
            const cookie_key = 'token';
            bake_cookie(cookie_key, token);

            dispatch(LoginSucess(res.data));
            // dismiss any existing toast first.
            toast.dismiss();
            toast.success( "Login Successful!", {autoClose: 3000});
            setTimeout(function(){
              window.location.replace('/home');
            }, 3000);
        })
        .catch(error => {
            toast.error(error.response.data.errors.error[0], {autoClose: false});
            dispatch(LoginFailed(error.response.data));


        });
    };

}
