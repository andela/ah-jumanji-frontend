import * as types from './types';
import * as profileActions from './profile';
import * as cloudinaryActions from './cloudinary';

describe('actions', () => {
   it('should create an action viewProfileSuccess', () => {
     const user = {
      "profile": {
        "user": 14,
        "username": "ROLL",
        "first_name": "Fabisch",
        "last_name": "",
        "bio": "Bambino kittens",
        "profile_photo": "",
        "country": "NRB",
        "phone_number": "0788676868",
        "twitter_handle": "",
        "website": "",
        "created": "2019-01-15T14:56:33.926858Z",
        "modified": "2019-01-22T15:36:27.255387Z"
      }
     }
     
     const expectedAction = {
      type: types.VIEW_PROFILE_SUCCESS,
      payload: user
     };
     
     expect(profileActions.viewProfile()).toEqual(expectedAction);
  });
})