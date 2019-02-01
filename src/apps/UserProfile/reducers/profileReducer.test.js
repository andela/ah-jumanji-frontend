import * as types from '../actions/types';
import profileReducer from './profileReducer';


describe('profile reducers', () => {
  const initialState = {
    profile: {},
    profileImage: {},
    authorProfile: {}
  };

  const profile = {
    'bio': 'Bambino Kittens',
    'country': 'KEN',
    'created': '2019-01-15T14:56:33.926858Z',
    'first_name': 'Ken',
    'last_name': 'Walker',
    'modified': '2019-01-24T07:50:42.338244Z',
    'phone_number': '0723902934',
    'profile_photo': 'https://res.cloudinary.com/authors-haven-jumanji',
    'twitter_handle': '9th March',
    'user': 14,
    'usernmae': '__roll.planes_',
    'website': 'https://www.instagram.com/'
  };

  it('should return the initial state', () => {
    expect(profileReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle VIEW_PROFILE_SUCCESS', () => {
    const action = {
      type: types.VIEW_PROFILE_SUCCESS,
      payload: profile
    };

    const expectedState = {
      profile,
      profileImage: {},
      authorProfile: {}
    };

    expect(profileReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle VIEW_PROFILE_FAILED', () => {
    const action = {
      type: types.VIEW_PROFILE_FAILED
    };
    expect(profileReducer({}, action)).toEqual({});
  });

  it('should handle EDIT_PROFILE_SUCCESS', () => {

    const action = {
      type: types.EDIT_PROFILE_SUCCESS,
      payload: profile
    };

    const expectedState = {
      profile,
      profileImage: {},
      authorProfile: {}
    };
    expect(profileReducer(initialState, action)).toEqual(expectedState);
  });

  it ('should handle VIEW_AUTHOR_PROFILE', () => {
    const action = {
      type: types.VIEW_AUTHOR_PROFILE,
      author_profile: {
        user: "test.user",
        bio: "Test bio"
      }
      };
      const expectedState = {
        profile: {},
        profileImage: {},
        authorProfile: {
          user: "test.user",
          bio: "Test bio"
        }
      };
      expect(profileReducer(initialState, action)).toEqual(expectedState);
    });
});