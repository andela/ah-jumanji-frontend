
import followingReducer from './followingReducer';
import * as types from '../actions/types';

describe('rating reducer', () => {

  const initialState = {
    followUser: {},
    unfollowUser: {}
  };

  it('should return the initial state', () => {
    expect(
     followingReducer(undefined, {
        followUser: {},
        unfollowUser: {}
    })).toEqual({
        followUser: {},
        unfollowUser: {}
    });
  });

  it('should handle follow', () => {
    const action = {
      type: types.FOLLOW,
      user: {
          "user": "test.user"
      }
    };

    const expectedState = {
        followUser: {
          "user": "test.user"
        },
        unfollowUser: {}
    };

    expect(followingReducer({
        ...initialState
    }, action )).toEqual(expectedState );
  });

  it('should handle unfollow', () => {
    const action = {
      type: types.UNFOLLOW,
      message: {
          "message": "You have unfollowed test user"
      }

    };
    const expectedState = {
        followUser: {},
        unfollowUser: {
            "message": "You have unfollowed test user"
        }
    };
    expect(followingReducer({
        ...initialState
    }, action)).toEqual(expectedState);

  });
});