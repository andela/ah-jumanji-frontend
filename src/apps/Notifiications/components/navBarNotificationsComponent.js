import React from 'react';
import PropTypes from 'prop-types';
import Notifications from "./NotificationsElementComponent";


function NotificationsBadge(props) {
  const {notifications_count} = props;
  return (
    <React.Fragment>
      <li className="nav-item dropdown">
        <button
          type="button" className="btn btn-link nav-link dropdown-toggle" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
          <span className="badge badge-danger notifications-badge">{notifications_count}</span>
          <i className="fas fa-bell" />
          Notifications
        </button>
        <Notifications />
      </li>
    </React.Fragment>
  );
}

NotificationsBadge.propTypes = {
  notifications_count: PropTypes.number.isRequired
};

export default NotificationsBadge;
