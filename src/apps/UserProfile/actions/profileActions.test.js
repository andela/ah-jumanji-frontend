import expect from 'expect';

import * as types from './types';
import * as profileActions from './profile';
import * as cloudinaryActions from './cloudinary';

const profileResponse = {
  'payload': {
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
  }
};

const error = {
  "payload": {
    "response": {
      "data": {
        "errors": {
          "website": ["Enter a valid URL."]
        }
      }
    }
  }
};

const imageCreds = {
  "payload": {
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
  }
};

describe('profile actions', () => {
  it('should dispatch the type VIEW_PROFILE_SUCCESS', () => {
    const expectedAction = {
      type: types.VIEW_PROFILE_SUCCESS,
      payload: profileResponse
    };
    expect(profileActions.viewProfileSuccess(profileResponse)).toEqual(expectedAction);
  });


  // Write view profile failed tests here

  it('it should dispatch the type EDIT_PROFILE_SUCCESS', () => {
    const expectedAction = {
      type: types.EDIT_PROFILE_SUCCESS,
      payload: profileResponse
    };
    expect(profileActions.editProfileSuccess(profileResponse)).toEqual(expectedAction);
  });

  it('it should dispatch the type EDIT_PROFILE_FAILED', () => {
    const expectedAction = {
      type: types.EDIT_PROFILE_FAILED,
      payload: error
    };
    expect(profileActions.editProfileFailed(error)).toEqual(expectedAction);
  });


  it('should dispatch the type IMAGE_UPLOAD_FAILED', () => {

    const imageError = {
      "payload": {
        "message": "Network Error"
      }
    };

    const expectedAction = {
      type: types.IMAGE_UPLOAD_FAILED,
      payload: imageError
    };
    expect(cloudinaryActions.imageUploadFailed(imageError)).toEqual(expectedAction);
  });

  it('should dispatch the type SUCCESSFUL_IMAGE_UPLOAD', () => {

    const expectedAction = {
      type: types.SUCCESSFUL_IMAGE_UPLOAD,
      payload: imageCreds
    };
    expect(cloudinaryActions.successfulImageUpload(imageCreds)).toEqual(expectedAction);
  });

});
