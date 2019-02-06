import React from 'react';
import Enzyme from "enzyme/build";
import Adapter from "enzyme-adapter-react-16/build";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import TestRenderer from "react-test-renderer";
import {Provider} from "react-redux";
import {mountWithStore} from "../../resetPassword/tests/email_reset.test";
import NotificationHistory from "./NotificationHistoryComponent";
import NotificationItem from "./NotificationItem.test";

Enzyme.configure({adapter: new Adapter()});

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Tests notifications history', function () {
  const InitialState = {
    Notifications: {}
  };
  const store = mockStore(InitialState);
  let wrapper = mountWithStore(<NotificationHistory />, store);

  it('should render correctly', function () {
    expect(wrapper.find('nav')).toBeDefined();
    expect(wrapper.find('nav-tab')).toBeDefined();
    expect(wrapper.find('tab-pane')).toBeDefined();
    wrapper = wrapper.update();
    wrapper.unmount();
  });
  it('should render again correctly', function () {
    const component = TestRenderer.create(
      <Provider store={mockStore({})}>
        <NotificationHistory />
      </Provider>
    );
    component.unmount();
  });


});
