import * as types from  '../actions/actionTypes';

const initialState = {
    averageRating: {},
    newRating: {}
};

export default function ratingReducer(state = initialState, action){
    switch (action.type) {
        case types.ADD_RATING_SUCCESS:
            return {
                ...state,
                newRating: action.rating
            };

        case types.ADD_RATING_FAILED:
            return {
                ...state,
                newRating: action.rating_message
            };

        case types.FETCH_AVERAGE_RATING:
            return{
                ...state,
                averageRating: action.average_rating
            };

        default:
            return state;
    }
}