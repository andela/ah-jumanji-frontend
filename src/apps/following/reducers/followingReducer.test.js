
import followingReducer from './followingReducer';
import * as types from '../actions/types';

describe('rating reducer', () => {

  const initialState = {
    followUser: {},
    unfollowUser: {},
    followers: {},
    following: {}
  };

  it('should return the initial state', () => {
    expect(
     followingReducer(undefined, {
        followUser: {},
        unfollowUser: {},
        followers: {},
        following: {}
    })).toEqual({
        followUser: {},
        unfollowUser: {},
        followers: {},
        following: {}
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
        unfollowUser: {},
        followers: {},
        following: {}
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
        },
        followers: {},
        following: {}
    };
    expect(followingReducer({
        ...initialState
    }, action)).toEqual(expectedState);

  });

  it('should handle fetch followers', () => {
    const action = {
      type: types.GET_FOLLOWERS,
      followers: {
          "user": "test.user"
      }
    };

    const expectedState = {
        followUser: {},
        unfollowUser: {},
        followers: {
            "user": "test.user"
        },
        following: {}
    };

    expect(followingReducer({
        ...initialState
    }, action )).toEqual(expectedState );
  });

  it('should handle fetch following', () => {
    const action = {
      type: types.GET_FOLLOWED,
      followed: {
          "user": "test.user"
      }
    };

    const expectedState = {
        followUser: {},
        unfollowUser: {},
        followers: {},
        following: {
            "user": "test.user"
        }
    };

    expect(followingReducer({
        ...initialState
    }, action )).toEqual(expectedState );
  });

});