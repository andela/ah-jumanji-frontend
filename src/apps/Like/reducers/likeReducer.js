import * as types from '../actions/likeActionTypes';

export const initialState = {
    likeCount: 0,
    liked: false,
    reactions: []
  };

export default(state=initialState, { type, payload }) => {
  switch(type) {
    case types.LIKE_SUCCESS:
      return {
        ...state,
        liked: !state.liked,
        likeCount: state.likeCount
      };

    case types.UNLIKE_SUCCESS:
      return {
        ...state,
        liked: state.liked,
        likeCount: state.likeCount
      };

    case types.GET_LIKES:
      return {
        ...state,
        likeCount: payload.likes,
      };

    case types.FETCH_LIKERS_SUCCESS:
      return {
        ...state,
        reactions: payload
      };

    default:
      return state;
  }
};
