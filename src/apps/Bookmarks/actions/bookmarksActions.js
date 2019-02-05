import axios from 'axios';

import { read_cookie } from 'sfcookies';

import * as types from  './actionTypes';

import config from '../../../config/config';

const endpointBookmarks = config.api.bookmarksUrl;

const token = read_cookie('token');

export function BookmarkSucess(bookmarks) {
    return {
        type: types.BOOKMARK_SUCCESS,
        bookmarks: bookmarks
    };
}

export function BookmarkFailed(bookmarkError) {
    return {
        type: types.BOOKMARK_FAILED,
        bookmarkError
    };
}

// post bookmarks
export function postBookmark(bookmarkingData) {
    return function (dispatch) {
        return axios.post(endpointBookmarks,
          bookmarkingData, {
          headers: {
            Accept: 'application/json',
            Authorization: 'Token '+token
          }
        })
        .then(res => {
            dispatch(BookmarkSucess(res.data));
        })
        .catch( error => {
          dispatch(BookmarkFailed(error));
        });
    };
}
