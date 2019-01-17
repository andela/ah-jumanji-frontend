import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  MemoryRouter
} from 'react-router-dom';
import Enzyme, {
  mount,
  shallow
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  Provider
} from "react-redux";

import App from '../../../App';
import AuthClass, {
  mapStateToProps,
  mapDispatchToProps
} from './SocialAuth';

Enzyme.configure({
  adapter: new Adapter()
});

const middlewares = [thunk];
const fakeStore = configureStore(middlewares);

it('Social login components renders without crashing in main App', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <App>
          <AuthClass />
        </App>
      </BrowserRouter>, div);
  });

  describe('<SocialAuth /> snapshot', () => {
    it('should match the snapshot', () => {
      const component = shallow(<AuthClass debug />);
      expect(component).toMatchSnapshot();
    });
  });


  describe('Registration form', () => {
    const store = fakeStore({});
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <AuthClass />
        </MemoryRouter>
      </Provider>
    );

    it('should render all buttons', () => {
      expect(wrapper.find('button').exists()).toBe(true);
      expect(wrapper.find('.btn-group').exists()).toBe(true);
      expect(wrapper.find('.fa-facebook-square').exists()).toBe(true);
      expect(wrapper.find('.btn-danger').exists()).toBe(true);
      expect(wrapper.find('.btn-info').exists()).toBe(true);
      expect(wrapper.find('.btn-primary').exists()).toBe(true);
    });
  });

//testing props (BETA)

describe('Social auth Props test', () => {
  const dispatch = jest.fn();
  let expectedData = null;
  let userdata={
    name: "Granson",
    token: "Token teijnnd"
  };

    it('should show previous', () => {
        let myProps = {"job": "programmer"};
        const initialState = {
          socialAuth: {"name": "Granson"}
        };

        // Just call the method directly passing in sample data
        expectedData = {"myProps": myProps, "socialAuth": {"name": "Granson"}};
        expect(mapStateToProps(initialState,myProps)).toEqual(expectedData);
    });

    it('return fetching status', () => {
      //#1. fetchingCall
        // For the `mapDispatchToProps`, call it directly but pass in
        // a mock function and check the arguments passed in are as expected;
        expectedData = {"payload": {"fetching": true, "message": "fetching"}, "type": "FETCH_STARTED"};
        mapDispatchToProps(dispatch).fetchingCall();
        expect(dispatch.mock.calls[0][0]).toEqual(expectedData);
    });

    it('return a failed call', () => {
      //#2. failedCall
        expectedData = {"payload": {"fetching": false, "message": "error"}, "type": "FAILED_FETCH"};
        mapDispatchToProps(dispatch).failedCall("error");
        expect(dispatch.mock.calls[0][0]).toEqual(expectedData);
    });

    it('should return all user data fetched from api', () => {
      //#3. receivedUsers
        expectedData = {
          "payload": {
            "fetching": false,
            "message": "success",
            "users": {
              "name": "Granson",
              "token": "Token teijnnd"
            }
          },
          "type": "RECEIVED_RESPONSE"
        };
        mapDispatchToProps(dispatch).receivedUsers(userdata);
        expect(dispatch.mock.calls[0][0]).toEqual(expectedData);
    });

    it('return facebook data', () => {
      //#2. FacebookAuth
        mapDispatchToProps(dispatch).FacebookAuth(userdata);
        expect(dispatch.mock.calls[0][0]).toEqual(userdata);
    });

    it('return google data', () => {
      //#2. GoogleAuth
        mapDispatchToProps(dispatch).GoogleAuth(userdata);
        expect(dispatch.mock.calls[0][0]).toEqual(userdata);
    });

    it('return twitter data', () => {
      //#2. TwitterAuth
        mapDispatchToProps(dispatch).TwitterAuth(userdata);
        expect(dispatch.mock.calls[0][0]).toEqual(userdata);
    });

});
