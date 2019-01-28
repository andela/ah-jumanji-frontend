import React from 'react';
import * as notificationActions from "../actions/notificationActions";
import NotificationsBody from "./NotificationHIstoryBody";
import NotificationItem from "./NotificationItem";


export default class NotificationHistory extends React.Component {

  static marshalContent(notifications) {
    let default_message = "There are no notifications to display";
    let content = null;
    if (notifications.length > 0) {
      content = notifications.map(notification => {
        return <NotificationItem key={notification.id} notification={notification} listClass="list-group-item" />;
      });
      content = <ul className="list-group list-group-flush scrollable-menu">{content}</ul>;
    } else {
      content = <li className="list-group-item">{default_message}</li>;
    }
    return content;
  }

  // Render the Notifications Page and Content
  constructor(props) {
    super(props);
    this.state = {
      read_notifications: [],
      unread_notifications: [],
      fetched: false
    };
  }

  componentDidMount() {
    let {_asyncRequest} = this;

    _asyncRequest = notificationActions.getUnreadNotificationsCount().then(values => {
      values = notificationActions.handleNullResponse(values);
      _asyncRequest = null;
      this.setState({unread_notifications: values, fetched: true});
    });

    _asyncRequest = notificationActions.getReadNotificationsCount().then(values => {
      values = notificationActions.handleNullResponse(values);
      _asyncRequest = null;
      this.setState({read_notifications: values, fetched: true});
    }).catch(() =>
      _asyncRequest.cancel()
    );
  }

  componentWillUnmount() {
    let {_asyncRequest} = this;
    if (_asyncRequest) {
      _asyncRequest.cancel();
    }
  }


  render() {
    const {read_notifications, unread_notifications, fetched} = this.state;
    let read_content = null;
    let unread_content = null;
    if (!fetched) {
      let body = (
        <React.Fragment>
          <li>
            Loading...
          </li>
        </React.Fragment>
      );
      return (<NotificationsBody unread_content={body} read_content={body} />);
    } else {
      read_content = NotificationHistory.marshalContent(read_notifications);
      unread_content = NotificationHistory.marshalContent(unread_notifications);
      return (<NotificationsBody read_content={read_content} unread_content={unread_content} />);
    }
  }
}
