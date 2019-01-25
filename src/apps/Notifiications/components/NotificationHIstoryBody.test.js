import React from 'react';
import Enzyme from "enzyme/build";
import Adapter from "enzyme-adapter-react-16/build";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import {mountWithStore} from "../../resetPassword/tests/email_reset.test";
import NotificationsBody from "./NotificationHIstoryBody";
import NotificationHistory from "./NotificationHistoryComponent";

Enzyme.configure({adapter: new Adapter()});

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Tests notifications body', function () {
  const InitialState = {
    Notifications: {}
  };
  const store = mockStore(InitialState);
  const unread = NotificationHistory.marshalContent([]);
  const read = NotificationHistory.marshalContent([]);
  let wrapper = mountWithStore(<NotificationsBody unread_content={unread} read_content={read} />, store);

  it('should render correctly', function () {
    expect(wrapper.find('nav')).toBeDefined();
    expect(wrapper.find('nav-tab')).toBeDefined();
    expect(wrapper.find('tab-pane')).toBeDefined();
  });
});
