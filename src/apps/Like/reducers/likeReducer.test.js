import LikeReducer, {initialState} from './likeReducer';
import * as types from "../actions/likeActionTypes";

const likeAction = {
  type: types.LIKE_SUCCESS,
  payload: {
    likeCount: 1,
    liked: true,
    reactions: []
  },
};

const unlikeAction = {
  type: types.UNLIKE_SUCCESS,
  payload: {
    likeCount: 0,
    liked: false,
    reactions: []
  },
};


describe('like reducers', () => {
  it('should return the initial state', () => {
    expect(LikeReducer(undefined, {})).toEqual(initialState);
  });

  it('should set states', () => {
    expect(LikeReducer(initialState, {})).toEqual(initialState);
  });

  it('should set liked state', () => {
    expect(LikeReducer(initialState, {types: types.LIKE_SUCCESS}).liked).toEqual(false);
  });

  it('should handle LIKE_SUCCESS', () => {
    expect(LikeReducer(undefined, likeAction)).toEqual({
      ...initialState,
      likeCount: 0,
      liked: true,
      reactions: []
    });
  });

  it('should handle UNLIKE_ARTICLE', () => {
    expect(LikeReducer(undefined, unlikeAction)).toEqual({
      ...initialState,
      likeCount: 0,
      liked: false,
      reactions: []
    });
  });
});
