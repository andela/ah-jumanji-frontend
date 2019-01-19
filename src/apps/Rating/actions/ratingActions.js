import * as types from './actionTypes';


export function addRatingSucess(rating) {
    return {
        type: types.ADD_RATING_SUCCESS,
        rating
    };
}

export function addRatingFailed(message) {
    return {
        type: types.ADD_RATING_SUCCESS,
        message
    };
}

export function fetchAverageRating(average_rating) {
    return {
        type: types.FETCH_AVERAGE_RATING,
        average_rating
    };
}