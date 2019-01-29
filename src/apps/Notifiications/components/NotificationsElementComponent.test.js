import React from 'react';
import Enzyme from "enzyme/build";
import Adapter from "enzyme-adapter-react-16/build";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import {mountWithStore} from "../../resetPassword/tests/email_reset.test";
import Notifications from "./NotificationsElementComponent";


Enzyme.configure({adapter: new Adapter()});

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe('Tests notifications Notifications container', function () {
  const InitialState = {
    Notifications: {}
  };
  const store = mockStore(InitialState);
  let wrapper = mountWithStore(<Notifications />, store);

  it('should render correctly', function () {
    expect(wrapper.find('ul')).toBeDefined();
    expect(wrapper.find('.dropdown-item')).toBeDefined();
    expect(wrapper.find('.dropdown-item').text()).toEqual('Loading...');
    // wrapper.find('.btn').simulate('click');
  });
});
