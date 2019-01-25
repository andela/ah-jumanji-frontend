import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as notificationActions from "../actions/notificationActions";
import NotificationItem from "./NotificationItem";


class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      unread_notifications: [],
      fetched: false
    };
    this.markAllAsRead = this.markAllAsRead.bind(this);
  }

  componentDidMount() {
    // start by fetching notifications and placing them in the local storage
    const {actions} = this.props;
    let {_asyncRequest} = this;
    actions.FetchAllNotifications('unread');
    actions.FetchAllNotifications('read');

    if (_asyncRequest !=="kd"){
      _asyncRequest = notificationActions.getUnreadNotificationsCount().then(values => {
        values = notificationActions.handleNullResponse(values);
        _asyncRequest = null;
        this.setState({unread_notifications: values, fetched: true});
      }).catch(() =>
        _asyncRequest = null
      );
    }
  }

  componentWillUnmount() {
    let {_asyncRequest} = this;
    let {actions} = this.props;
    if (_asyncRequest) {
      _asyncRequest.cancel();
    }
    notificationActions.cache.clear().then(() => {
      actions.FetchAllNotifications('unread');
      actions.FetchAllNotifications('read');
    });

  }

  markAllAsRead() {
    const {actions} = this.props;
    // query the API
    actions.markAllNotificationsRead();
    actions.FetchAllNotifications('unread');
    actions.FetchAllNotifications('read');
    this.forceUpdate();
  }


  render() {
    const {unread_notifications, fetched} = this.state;
    let content = null;
    let default_message = "There are no notifications to display  here";
    if (fetched === false) {// Render loading state ...
      return (
        <ul className="dropdown-menu scrollable-menu notifications" role="menu" aria-labelledby="navbarDropdown">
          <li className="dropdown-item">Loading...</li>
        </ul>
      );
    } else {// Render real UI ...
      if (unread_notifications.length > 0) {
        content = unread_notifications.map(notification => {return <NotificationItem key={notification.id} notification={notification} listClass="dropdown-item" />;});
      } else {
        content = <li className="dropdown-item">{default_message}</li>;
      }
      let unread = <ul>{content}</ul>;
      return (
        <ul className="dropdown-menu scrollable-menu notifications" role="menu" aria-labelledby="navbarDropdown">
          <div className="dropdown-header">
            <ul className=" nav nav-pills">
              <li>
                <button onClick={this.markAllAsRead} type="button" className="btn btn-link" data-toggle="tooltip" data-placement="bottom" title="Mark all notifications as read">mark all</button>
                <a href="/a/notifications" className="btn btn-link" data-toggle="tooltip" data-placement="bottom" title="View more notifications">view more</a>
              </li>
            </ul>
          </div>
          {unread}
        </ul>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    notifications: state.Notifications,
  };
}

Notifications.propTypes = {
  actions: PropTypes.object
};

Notifications.defaultProps = {
  actions: {}
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(notificationActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
