import axios from "axios";
import * as types from './actions';
import apiConfig from "../../../config/config";
import CacheFactory from '../utils/CacheFactory';


export const cache = new CacheFactory();

export function getUnreadNotificationsCount() {
  return cache.readData('unread');
}

export function getReadNotificationsCount() {
  return cache.readData('read');
}

export function handleNullResponse(values) {
  if (values === null) {
    return [];
  } else {
    return values;
  }
}

export function removeNotification(id) {
  cache.readData('unread').then(value => {
    let unreads = value.filter(function (value) {
      return value.id !== id;
    });
    cache.writeData('unread', unreads);
  });
}

export function getAllUnreadNotifications(count, notifications) {
  cache.writeData('unread', notifications);
  return {
    type: types.GET_UNREAD_NOTIFICATIONS,
    count,
    notifications
  };
}

export function getAllReadNotifications(count, notifications) {
  cache.writeData('read', notifications);
  return {
    type: types.GET_READ_NOTIFICATIONS,
    count,
    notifications
  };
}

export function getSpecificNotification(notification_id, notification) {
  return {
    type: types.GET_SPECIFIC_NOTIFICATION,
    notification_id,
    notification
  };
}


export function markAsUnRead(notification_id, notification) {
  removeNotification(notification_id);
  return {
    type: types.MARK_AS_UNREAD,
    notification_id,
    notification
  };
}

export function loadSubmitSuccessful(message) {
  return {
    "type": types.FETCH_NOTIFICATIONS_SUCCESSFUL,
    "message": message,
    "isFetching": false
  };
}

export function loadSubmitFailure(message) {
  return {
    "type": types.FETCH_NOTIFICATIONS_FAILED,
    "error": message,
    "isFetching": false
  };
}


// utility functions
function switchUrl(type) {
  switch (type) {
    case 'unread':
      return apiConfig.api.unreadNotificationsURL;
    case 'read':
      return apiConfig.api.readNotificationsURL;
    case 'mark_read' :
      return apiConfig.api.markNotificationRead;
    case 'mark_unread':
      return apiConfig.api.unmarkNotificationRead;
  }
}

function switchAction(type, count, notifications) {
  switch (type) {
    case 'read':
      return getAllReadNotifications(count, notifications);
    case 'unread':
      return getAllUnreadNotifications(count, notifications);
  }
}

function switchToggleAction(type, notification_id, notification) {
  switch (type) {
    case 'mark_read':
      return getSpecificNotification(notification_id, notification);
    case 'mark_unread':
      return markAsUnRead(notification_id, notification);
  }
}


// add thunks here

export function FetchAllNotifications(type) {
  const url = switchUrl(type);
  return async function (dispatch) {
    const config = {
      method: "GET",
      url: url,
      headers: {
        Authorization: 'Token ' + process.env.TOKEN
      },
    };

    try {
      await axios(config).then((response) => {
        if (response.data.hasOwnProperty('message')) {
          dispatch(loadSubmitSuccessful(response.data.message));
        } else {
          dispatch(loadSubmitSuccessful("Notifications updated"));
          dispatch(switchAction(type, response.data.count, response.data.notifications));
        }
      });
    } catch (error) {
      dispatch(loadSubmitFailure("Critical error while fetching notifications"));
    }
  };
}

export function markAllNotificationsRead() {
  return async function (dispatch) {
    const config = {
      method: "get",
      url: apiConfig.api.markAllRead,
      headers: {
        Authorization: 'Token ' + process.env.TOKEN
      },
    };

    await axios(config).then((response) => {
      dispatch(loadSubmitSuccessful(response.data.message));
      FetchAllNotifications('unread');
      FetchAllNotifications('read');
    });

  };
}

export function toggleSpecificNotificationReadStatus(status, notification_id) {
  return async function (dispatch) {
    const config = {
      method: "get",
      url: switchUrl(status) + notification_id,
      headers: {
        Authorization: 'Token ' + process.env.TOKEN
      },
    };

    try {
      await axios(config).then((response) => {
        // console.log(response.config);
        dispatch(loadSubmitSuccessful("Notification status changed!!"));
        dispatch(switchToggleAction(status, notification_id, response.data));
      });
    } catch (error) {
      dispatch(loadSubmitFailure(error.response.data.detail));
    }
  };
}

