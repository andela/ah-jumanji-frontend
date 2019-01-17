import * as actions from './SocialActions';
import * as TYPES from './actionTypes';

it('return provided all data passed to facebook as auth data', () => {
  const passed_payload = {
    "provider": "facebook",
    "token": "Token 156789",
    "data":"Dummy data",
    "park":"Hresre"
  };
  const passedData = passed_payload;
  expect(actions.FacebookAuth(passed_payload)).toEqual(passedData);
});

it('returnd auth data passed to google', () => {
  const google_payload = {
    "provider": "google",
    "access_token": "Token 1234589"
  };
  const result = google_payload;
  expect(actions.GoogleAuth(google_payload)).toEqual(result);
});

it('return twitter auth data', () => {
  const twitter_payload = {
    "provider": "twitter",
    "token": "Token 456789",
    "secret": "Tjhsslsml"
  };
  const result = twitter_payload;
  expect(actions.TwitterAuth(twitter_payload)).toEqual(result);
});

it('should return received users data', () => {
  const user_data = {
    name: 'Granson',
    access_token: 'Token 12345',
    provider: 'facebook'
  };
  const expectedAction = {
    type: TYPES.RECEIVE_CALL,
    payload: {
      fetching: false,
      users: user_data,
      message: "success"
    }
  };

  expect(actions.receivedUsers(user_data)).toEqual(expectedAction);
});

it('should return status as fetching', () => {

  const expectedAction = {
    type: TYPES.FETCH_CALL,
    payload: {
      fetching: true,
      message: "fetching"
    }
  };

  expect(actions.fetchingCall()).toEqual(expectedAction);
});

it('should return status as error', () => {

  const expectedAction ={
    type: TYPES.FETCH_FAILED,
    payload: {
      fetching: false,
      message: "error"
    }
  };

  expect(actions.failedCall("error")).toEqual(expectedAction);
});
