import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';
import moxios from 'moxios';


import * as actions from "./notificationActions";
import * as types from "./actions";

jest.mock('sfcookies', () => ({
  read_cookie: () => {
    return "nnnnnnnn";
  }
}));

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe('fetch notifications', function () {
  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('should fetch  a message notifications if non exist', function () {
    let success_message = "You have no notifications to display";

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          "message": success_message
        },
      });
    });

    const expectedAction = [{
      "isFetching": false,
      "message": "You have no notifications to display",
      "type": "FETCH_NOTIFICATIONS_SUCCESSFUL"
    },
      {
        "count": 0, "notifications": [], "type": "GET_UNREAD_NOTIFICATIONS"
      }
    ];

    const store = mockStore({});

    return store.dispatch(actions.FetchAllNotifications('unread')).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedAction);
    });
  });


  it('should fetch  notifications if they exist', function () {

    let notifications = [];
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          "count": notifications.length,
          "notifications": notifications
        },
      });
    });

    const expectedAction = [{
      "isFetching": false,
      "message": "Notifications updated",
      "type": types.FETCH_NOTIFICATIONS_SUCCESSFUL
    },
      {
        "count": 0,
        "notifications": notifications,
        "type": types.GET_UNREAD_NOTIFICATIONS
      }
    ];


    const store = mockStore({});

    return store.dispatch(actions.FetchAllNotifications('unread')).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedAction);
    });
  });


  it('should fetch  notifications if they exist', function () {

    let notifications = [];
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          "count": notifications.length,
          "notifications": notifications
        },
      });
    });

    const expectedAction = [{
      "isFetching": false,
      "message": "Notifications updated",
      "type": types.FETCH_NOTIFICATIONS_SUCCESSFUL
    },
      {
        "count": 0,
        "notifications": notifications,
        "type": types.GET_READ_NOTIFICATIONS
      }
    ];


    const store = mockStore({});

    return store.dispatch(actions.FetchAllNotifications('read')).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('should return an error message if request fails', function () {
    let error_message = "Critical error while fetching notifications";

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: {
          "error": error_message
        },
      });
    });

    const expectedAction = [
      {
        "isFetching": false,
        "error": error_message,
        "type": types.FETCH_NOTIFICATIONS_FAILED
      }
    ];

    const store = mockStore({});

    return store.dispatch(actions.FetchAllNotifications('read')).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('should mark all notifications as read', function () {
    let success_message = "Notifications marked as read";

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          "message": success_message
        }
      });
    });

    const expectedAction = [
      {
        "isFetching": false,
        "message": success_message,
        "type": types.FETCH_NOTIFICATIONS_SUCCESSFUL
      }
    ];

    const store = mockStore({});

    return store.dispatch(actions.markAllNotificationsRead()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('should fetch specific notification and mark as read', function () {
    let success_message = "Notification status changed!!";

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          "message": success_message
        }
      });
    });

    const expectedAction = [{
        "isFetching": false,
        "message": success_message,
        "type": types.FETCH_NOTIFICATIONS_SUCCESSFUL
      },
        {
          "notification": {
            "message": success_message,
          },
          "notification_id": 107,
          "type": types.GET_SPECIFIC_NOTIFICATION
        },
      ]
    ;

    const store = mockStore({});

    return store.dispatch(actions.toggleSpecificNotificationReadStatus('mark_read', 107)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('should fetch specific notification and mark as unread', function () {
    let success_message = "Notification status changed!!";

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          "message": success_message
        }
      });
    });

    const expectedAction = [{
        "isFetching": false,
        "message": success_message,
        "type": types.FETCH_NOTIFICATIONS_SUCCESSFUL
      },
        {
          "notification": {
            "message": success_message,
          },
          "notification_id": 107,
          "type": types.MARK_AS_UNREAD
        },
      ]
    ;

    const store = mockStore({});

    return store.dispatch(actions.toggleSpecificNotificationReadStatus('mark_unread', 107)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('should return an error message if notification is not found', function () {
    let error_message = "The notification 109 was not found";

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404,
        response: {
          "detail": error_message
        },
      });
    });

    const expectedAction = [
      {
        "isFetching": false,
        "error": error_message,
        "type": types.FETCH_NOTIFICATIONS_FAILED
      }
    ];

    const store = mockStore({});

    return store.dispatch(actions.toggleSpecificNotificationReadStatus('mark_unread', 107)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

});

