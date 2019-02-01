import axios from 'axios';
import { read_cookie } from 'sfcookies';
import { toast } from 'react-toastify';

import * as types from './types';
import config from '../../../config/config';

const token = read_cookie("token");

export function follow(user) {
    return {
        type: types.FOLLOW,
        user
    };
}

export function unfollow(message) {
    return {
        type: types.UNFOLLOW,
        message
    };
}

export function followUser(username) {
    let followEndpoint = `${config.api.followUrl}${username}/follow`;
    return function(dispatch) {
        return axios.post(followEndpoint, {}, {
            headers: {
                Accept: 'application/json',
                Authorization: `Token ${token}`
            }
        })
        .then(res => {
            toast.success(res.data.message, {autoClose: 2000});
            dispatch(follow(res.data));
        });
    };
}

export function unfollowUser(username) {
    let unfollowEndpoint = `${config.api.followUrl}${username}/follow`;
    return function(dispatch) {
        return axios.delete(unfollowEndpoint, {
            headers: {
                Accept: 'application/json',
                Authorization: `Token ${token}`
            }
        }).then(res => {
            toast.success(res.data.message, {autoClose: 2000});
            dispatch(unfollowUser(res.data));
        });
    };
}




