import * as types from  '../actions/types';

const initialState = {
    followUser: {},
    unfollowUser: {},
    followers: {},
    following: {}
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
        case types.GET_FOLLOWERS:
            return {
                ...state,
                followers: action.followers
            };
        case types.GET_FOLLOWED:
            return {
                ...state,
                following: action.followed
            };
        default:
            return state;
    }
}
