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
export function myFollowers(followers){
    return {
        type: types.GET_FOLLOWERS,
        followers
    };
}

export function myFollowed(followed){
    return {
        type: types.GET_FOLLOWED,
        followed
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
export function getFollowers() {
    let FollowersUrl = config.api.getFollowersUrl;
    return function(dispatch) {
        return axios.get(FollowersUrl, {
            headers: {
                Accept: 'application/json',
                Authorization: `Token ${token}`
            }
        })
        .then(res => {
            dispatch(myFollowers(res.data));
        });
    };
}

export function getFollowed() {
    let FollowedUrl = config.api.getFollowedUrl;
    return function(dispatch) {
        return axios.get(FollowedUrl, {
            headers: {
                Accept: 'application/json',
                Authorization: `Token ${token}`
            }
        }).then(res => {
            dispatch(myFollowed(res.data));
        });
    };
}

