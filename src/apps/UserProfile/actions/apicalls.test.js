import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';
import moxios from 'moxios';

import * as types from './types';
import * as profileActions from './profile';
import * as cloudinaryActions from './cloudinary';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('api calls to the api ', () => {
  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  const serverResponse = {
    "profile": {
      "user": 5,
      "username": "rollplanes_",
      "first_name": "Ken",
      "last_name": "Kittens",
      "bio": "the game",
      "profile_photo": "https://res.cloudinary.com/authors-haven-jumanji/image/upload/v1548656835/41296421dc5ecc81e144d4108c318624_qegqid.jpg",
      "country": "AL",
      "phone_number": "0703341751",
      "twitter_handle": "9thMarch",
      "website": "https://www.instagram.com/",
      "created": "2019-01-25T09:33:08.704145Z",
      "modified": "2019-01-28T08:57:16.339943Z"
    }

  }

  const serverResponse2 = {
      "user": 5,
      "username": "rollplanes_",
      "first_name": "Ken",
      "last_name": "Kittens",
      "bio": "the game",
      "profile_photo": "https://res.cloudinary.com/authors-haven-jumanji/",
      "country": "AL",
      "phone_number": "0703341751",
      "twitter_handle": "9thMarch",
      "website": "https://www.instagram.com/",
      "created": "2019-01-25T09:33:08.704145Z",
      "modified": "2019-01-28T08:57:16.339943Z"

  }

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

  it('should create a EDIT_PROFILE_SUCCESS', function () {

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: serverResponse
      });
    });

    const expectedAction = [
      {
        "payload": serverResponse,
        "type": types.EDIT_PROFILE_SUCCESS
      }
    ];

    const store = mockStore({"profile": {}});


    return store.dispatch(profileActions.editProfile(serverResponse)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('should run SUCCESSFUL_IMAGE_UPLOAD', function () {

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: imageCreds
      });
    });

    const expectedAction = [
      {
        "payload": imageCreds,
        "type": types.SUCCESSFUL_IMAGE_UPLOAD
      }
    ];

    const store = mockStore({"profile": {}});
    let file = 'image.jpg'

    return store.dispatch(cloudinaryActions.fileUploadHandler(file, serverResponse)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });

  });

  it('should run VIEW_PROFILE_SUCCESS action', function () {

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: serverResponse
      });
    });

    const expectedAction = [
      {
        "payload": serverResponse2,
        "type": types.VIEW_PROFILE_SUCCESS
      }
    ];

    const store = mockStore({"profle": {}});

    return store.dispatch(profileActions.viewProfile()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });

  });


})
