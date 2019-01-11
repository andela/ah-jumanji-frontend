import axios from 'axios';

import * as types from  './actionTypes';

const endpoint ='https://ah-jumanji-staging.herokuapp.com/api/users/login';

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
            localStorage.setItem('token', token);
            dispatch(LoginSucess(res.data));
            setTimeout(function(){
              window.location.replace('/home');
            }, 3000);
        })
        .catch(error => {
            dispatch(LoginFailed(error.response.data));
        });
    };

}
