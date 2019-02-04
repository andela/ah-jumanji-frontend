import React from 'react';
import Enzyme, {shallow} from "enzyme/build";
import Adapter from "enzyme-adapter-react-16/build";
import thunk from "redux-thunk";
import TestRenderer from 'react-test-renderer';
import configureMockStore from "redux-mock-store";
import {shallowWithStore} from "../../resetPassword/tests/email_reset.test";
import NotificationItem from "./NotificationItem";
import {Provider} from "react-redux";


Enzyme.configure({adapter: new Adapter()});

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe('Tests notifications item', function () {
  const InitialState = {
    Notifications: {}
  };
  const notification = {
    "id": 161,
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
      "username": "fgkinus2",
      "profile_image": ""
    },
    "target": null,
    "action_object": "/api/articles/title-cdnoeazysnkcqpmrgqcj-text/",
    "timestamp": "2019-01-24T17:28:21.471818Z",
    "timesince": "1 minute"
  };
  const store = mockStore(InitialState);
  let wrapper = shallowWithStore(<NotificationItem notification={notification} listClass="list" />, store);

  it('should render correctly', function () {
    expect(wrapper.find('nav')).toBeDefined();
    expect(wrapper.find('.followers-avatar')).toBeDefined();
    expect(wrapper.find('.btn')).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });
  it('should render again correctly', function () {
    const component = TestRenderer.create(
      <Provider store={mockStore({})}>
        <NotificationItem notification={notification} listClass="list" />
      </Provider>
    );


    component.unmount();
  });

  describe('<NotificationItem />', () => {
    it('should match the snapshot', () => {
      const component = shallow(<NotificationItem debug />);
      expect(component).toMatchSnapshot();
    });
  });
});
