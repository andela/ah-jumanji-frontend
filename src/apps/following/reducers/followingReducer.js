import * as types from  '../actions/types';

const initialState = {
    followUser: {},
    unfollowUser: {}
};

export default function followingReducer(state = initialState, action){
    switch (action.type) {
        case types.FOLLOW:
            return {
                ...state,
                followUser: action.user
            };

        case types.UNFOLLOW:
            return {
                ...state,
                unfollowUser: action.message
            };

        default:
            return state;
    }
}

