import React from 'react';
import * as notificationActions from "../actions/notificationActions";
import NotificationsBody from "./NotificationHIstoryBody";
import NotificationItem from "./NotificationsElementComponent";


export default class NotificationHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      read_notifications: [],
      fetched: false
    };
  }

  // componentDidMount() {
  //   let {_asyncRequest} = this;
  //
  //   _asyncRequest = notificationActions.getReadNotificationsCount().then(values => {
  //     values = notificationActions.handleNullResponse(values);
  //     _asyncRequest = null;
  //     this.setState({read_notifications: values, fetched: true});
  //   }).catch(() =>
  //     _asyncRequest.cancel()
  //   );
  //
  //
  // }
  //
  // componentWillUnmount() {
  //   let {_asyncRequest} = this;
  //   if (_asyncRequest) {
  //     _asyncRequest.cancel();
  //   }
  // }

  render() {
    const {read_notifications, fetched} = this.state;
    let read_content = null;
    let body = <li>Loading...</li>;
    return (
      <NotificationsBody  />
    );

  }
}
