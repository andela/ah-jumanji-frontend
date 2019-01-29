import axios from 'axios';
import { read_cookie } from "sfcookies";

import * as types from './likeActionTypes';
import config from '../../../config/config';

const likeUrl = config.api.likeUrl;
const slug = `${location.pathname.split("/")[3]}`;
const token = read_cookie('token');
const getLikesUrl = `${likeUrl}/${slug}`;

export const likeSuccess = (data, liked) => ({
  type: liked ? types.UNLIKE_SUCCESS : types.LIKE_SUCCESS,
  data
});

export const likeFail = error => ({
  type: types.LIKE_FAIL,
  error
});

export const getLikes = (payload) => ({
  type: types.GET_LIKES,
  payload
});

export const getLikesFail = error => ({
  type: types.GET_LIKES_FAIL,
  error
});

export const fetchLikersSuccess = (payload) => ({
  type: types.FETCH_LIKERS_SUCCESS,
  payload
});

export const fetchLikersFail = error => ({
  type: types.FETCH_LIKERS_FAIL,
  error
});

export const addLikes = (data) => {
  return function (dispatch) {
    return axios.post(likeUrl, data, {
      headers: {
        Accept: 'application/json',
        Authorization: `Token ${token}`
      }
    })
      .then(response => {
        dispatch(likeSuccess(response.data));
        dispatch(getArticleLikes());
        dispatch(fetchLikers());
      })
    .catch(error => {
        dispatch((likeFail(error)));
      });
  };
};

export const getArticleLikes = () => {
  return function (dispatch) {
    return axios.get(getLikesUrl, {
      headers: {
        Accept: 'application/json',
        Authorization: `Token ${token}`
      }
    })
      .then(response => {
        dispatch(getLikes(response.data.number_of_reactions));
      })
      .catch(error => {
        dispatch(getLikesFail(error.response.data.errors));
      });
  };
};

export const fetchLikers = () => {
  return function (dispatch) {
    return axios.get(getLikesUrl, {
      headers: {
        Accept: 'application/json',
        Authorization: `Token ${token}`
      }
    })
      .then(response => {
        dispatch(fetchLikersSuccess(response.data.reactions));
      })
      .catch(error => {
        dispatch(fetchLikersFail(error.response.data.errors));
      });
  };
};
