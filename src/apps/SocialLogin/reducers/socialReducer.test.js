import testReduces from './socialReducer';
import {
  FACEBOOK,
  GOOGLE,
  TWITTER,
  RECEIVE_CALL,
  FETCH_CALL,
  FETCH_FAILED
} from '../actions/actionTypes';

it('facebook reducer adding value in not empty state', () => {
  let state = {
    method: 'TDD',
    language: 'python',
    age: 25
  };
  let passed_data = {
    type: FACEBOOK,
    payload: {
      user: 'Granson',
      email: 'granson.test@mail.com'
    }
  };
  let receiver_data = {
    "method": 'TDD',
    "language": 'python',
    "age": 25,
    "email": "granson.test@mail.com",
    "user": "Granson"
  };
  //Should add data in payload  to existing data
  expect(testReduces(state, passed_data)).toEqual(receiver_data);
});


it('adds value in state with values', () => {
  let state = {
    method: 'SRG',
    language: 'COBOL',
    gender:'male'
  };
  let passed_data = {
    type: GOOGLE,
    payload: {
      user: 'Grace',
      email: 'grace.test@mail.com'
    }
  };

  let receiver_data = {
    "method": 'SRG',
    "language": 'COBOL',
    "gender":"male",
    "email": "grace.test@mail.com",
    "user": "Grace"
  };
  //Should add data in payload  to existing data
  expect(testReduces(state, passed_data)).toEqual(receiver_data);
});


it('twitter updates value in state', () => {
  let state = {
    method: 'APP',
    language: 'java',
    user: 'Bobo',
    email: 'bobo.test@mail.com'
  };
  let passed_data = {
    type: TWITTER,
    payload: {
      method: 'TDD',
      language: 'C+',
      user: 'Dido',
      email: 'dido.test@mail.com'
    }
  };

  let receiver_data = {
    "method": 'TDD',
    "language": 'C+',
    "email": "dido.test@mail.com",
    "user": "Dido"
  };
  //Should add data in payload  to existing data
  expect(testReduces(state, passed_data)).toEqual(receiver_data);
});

it('Test auth receiver reducer adds value in empty state', () => {
  let state = {};
  let passed_data = {
    type: RECEIVE_CALL,
    payload: {
      user: 'Granson',
      email: 'granson.test@mail.com'
    }
  };

  let receiver_data = {
    "email": "granson.test@mail.com",
    "user": "Granson"
  };
  //Should add data in payload  to existing data
  expect(testReduces(state, passed_data)).toEqual(receiver_data);
});


it('updates the state if fetching', () => {

  let state = {};
  let passed_data = {
    type: FETCH_CALL,
    payload: {
      fetching: true,
      message: 'fetching'
    }
  };

  let receiver_data = {
    fetching: true,
    message: 'fetching'
  };
  //Should add data in payload  to existing data
  expect(testReduces(state, passed_data)).toEqual(receiver_data);
});


it('updates the state if failed', () => {

  let state = {
    fetching: true,
    message: 'fetching'
  };

  let passed_data = {
    type: FETCH_FAILED,
    payload: {
      fetching: false,
      message: 'failed'
    }
  };

  let receiver_data = {
    fetching: false,
    message: 'failed'
  };
  //Should add data in payload  to existing data
  expect(testReduces(state, passed_data)).toEqual(receiver_data);
});

it('retuns empty state on default', () => {

  let state = {};

  let passed_data = {
    type: "NO TYPE",
  };

  let receiver_data = {};
  //Should add data in payload  to existing data
  expect(testReduces(state, passed_data)).toEqual(receiver_data);
});
