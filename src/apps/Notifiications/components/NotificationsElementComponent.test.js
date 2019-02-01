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
  let notifications = [
    {
      "id": 181,
      "unread": true,
      "emailed": false,
      "actor": {
        "user": 39,
        "username": "fgkinus2",
        "first_name": "fgkinus2",
        "last_name": "",
        "bio": "",
        "profile_photo": "",
        "country": "",
        "phone_number": "",
        "twitter_handle": "",
        "website": "",
        "created": "2019-01-10T08:37:44.560203Z",
        "modified": "2019-01-18T09:29:44.120076Z"
      },
      "verb": "Commented on the article",
      "recipient": {
        "email": "fgkinus@gmail.com",
        "username": "fgkinus2"
      },
      "target": null,
      "action_object": "/api/articles/title-kjklvoghprfuxwutqwfy-text/",
      "timestamp": "2019-01-24T17:29:54.054719Z",
      "timesince": "1 week"
    },
    {
      "id": 180,
      "unread": true,
      "emailed": false,
      "actor": {
        "user": 39,
        "username": "fgkinus2",
        "first_name": "fgkinus2",
        "last_name": "",
        "bio": "",
        "profile_photo": "",
        "country": "",
        "phone_number": "",
        "twitter_handle": "",
        "website": "",
        "created": "2019-01-10T08:37:44.560203Z",
        "modified": "2019-01-18T09:29:44.120076Z"
      },
      "verb": "Commented on the article",
      "recipient": {
        "email": "fgkinus@gmail.com",
        "username": "fgkinus2"
      },
      "target": null,
      "action_object": "/api/articles/title-cdnoeazysnkcqpmrgqcj-text/",
      "timestamp": "2019-01-24T17:29:43.192909Z",
      "timesince": "1 week"
    }];

  it('should render correctly with no items', function () {
    expect(wrapper.find('ul')).toBeDefined();
    expect(wrapper.find('.dropdown-item')).toBeDefined();
    expect(wrapper.find('.dropdown-item').text()).toEqual('Loading...');
  });

  it('should render correctly with items', function () {
    // const wrapper = mountWithStore(<Notifications />, store);
    wrapper.setState({fetched: 'true'});
    wrapper.setState({unread_notifications: notifications});
    expect(wrapper.state().fetched).toEqual('true');
    expect(wrapper.state().unread_notifications).toEqual(notifications);
    wrapper = wrapper.update();
    wrapper.unmount();

  });
});
