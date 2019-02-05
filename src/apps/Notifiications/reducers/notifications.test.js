import notificationReducer from './noticationsReducers';
import * as actions from '../actions/notificationActions';

describe('notification reducer', () => {

  it('should return the initial state', () => {
    expect(notificationReducer(undefined, {})).toEqual({});
  });

  it('should handle GETTING UNREAD NOTIFICATIONS', () => {
    const action = actions.getAllUnreadNotifications(1,[{}]);
    const response =  {
         "count": 1,
         "notifications": [
            {},
         ],
         "type": "GET_UNREAD_NOTIFICATIONS",
       };
    expect(notificationReducer({},action)).toEqual(response);
  });

  it('should handle getAllReadNotifications', () => {
    const action = actions.getAllReadNotifications(1, [{}]);
    const response = {
      "count": 1,
      "notifications": [
            {},
         ],
      "type": "GET_READ_NOTIFICATIONS",
    };
    expect(notificationReducer({},action)).toEqual(response);
  });

  it('should handle getSpecificNotification', () => {
    const action = actions.getSpecificNotification(1, {});
    const response = {"notification_id": 1, "notification": {}, "type": "GET_SPECIFIC_NOTIFICATION"};
    expect(notificationReducer({},action)).toEqual(response);
  });

  it('should handle notification mark as read', () => {
    const action = actions.markAsUnRead(1, {});
    const response = {"notification_id": 1, "notification": {}, "type": "MARK_AS_UNREAD"};
    expect(notificationReducer({},action)).toEqual(response);
  });


});

