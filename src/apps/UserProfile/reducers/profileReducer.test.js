import * as types from '../actions/types';
import profileReducer from './profileReducer';
import * as actions from '../actions/profile';


describe('profile reducers', () => {
  const initialState = {
    profile: {},
    profileImage: {},
    authorProfile: {}
  };

  const imageCreds = {
    "bytes": 18288,
    "created_at": "2019-01-24T21:14:47Z",
    "etag": "b3de80f76a46d22d89948d8cef9ee741",
    "existing": false,
    "format": "jpg",
    "height": 295,
    "original_filename": "50eb87568743c099a7a65b004388b036",
    "placeholder": false,
    "public_id": "50eb87568743c099a7a65b004388b036_inizvz",
    "resource_type": "image",
    "secure_url": "https://res.cloudinary.com/authors-haven-jumanji/",
    "signature": "c17f55e300eaf1f6c483da36ddb3697fa3c1b681"
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

  it('should handle editing profile failed', () => {
    const action = {
      type: types.EDIT_PROFILE_FAILED
    };

    expect(profileReducer({}, action)).toEqual({});
  });

  it('should handle image upload failed', () => {
    const action = {
      type: types.IMAGE_UPLOAD_FAILED
    };

    expect(profileReducer({}, action)).toEqual({});
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

  it('should handle successful image upload', () => {
    const initial = {};
    const action = {
      type: types.SUCCESSFUL_IMAGE_UPLOAD,
      payload: imageCreds
    };

    const expectedState = {
      profileImage: imageCreds
    }

    expect(profileReducer(initial, action)).toEqual(expectedState);
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