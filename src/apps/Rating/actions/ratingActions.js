import axios from 'axios';
import { read_cookie } from 'sfcookies';
import { toast } from 'react-toastify';

import * as types from './actionTypes';
import config from '../../../config/config';

const slug = `${location.pathname.split("/")[3]}`;
const ratingEndpoint = `${config.api.ratingUrl}${slug}/rating`;
const token = read_cookie("token");

export function addRatingSucess(rating) {
    return {
        type: types.ADD_RATING_SUCCESS,
        rating
    };
}

export function addRatingFailed(rating_message) {
    return {
        type: types.ADD_RATING_FAILED,
        rating_message
    };
}

export function fetchAverageRating(average_rating) {
    return {
        type: types.FETCH_AVERAGE_RATING,
        average_rating
    };
}


export function postArticleRating(ratingData) {
    return function(dispatch) {
        return axios.post(ratingEndpoint,
            ratingData, {
            headers: {
                Accept: 'application/json',
                Authorization: `Token ${token}`
            }
        })
        .then(res => {
            dispatch(addRatingSucess(res.data));
            dispatch(fetchArticleRating());
        })
        .catch(error => {
            toast.error(error.response.data.message, {autoClose: 2000});
            dispatch(addRatingFailed(error.response.data));
        });
    };
}

export function fetchArticleRating() {
    return function(dispatch) {
        return axios.get(ratingEndpoint, {
            headers: {
                Accept: 'application/json',
                Authorization: `Token ${token}`
            }
        }).then(res => {
            //get rating
            dispatch(fetchAverageRating(res.data));
        });
    };
}




