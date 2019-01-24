import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import profileAvatar from '../../../assets/img/profile-avatar.png';
import * as notificationActions from "../actions/notificationActions";


class NotificationItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: props.notification.unread
    };
    this.onClick = this.onClick.bind(this);
    this.switchStatus = this.switchStatus.bind(this);
  }

  onClick() {
    let {notification, actions} = this.props;
    let {status} = this.state;
    actions.toggleSpecificNotificationReadStatus(
      this.switchStatus(status),
      notification.id
    );

  }

  switchStatus(status) {
    switch (status) {
      case true:
        this.setState(
          {status: false}
        );
        return "mark_read";
      case false:
        this.setState(
          {status: true}
        );
        return "mark_unread";
    }
  }

  switchClass() {
    const {status} = this.state;
    switch (status) {
      case true:
        return "btn btn-light btn-sm unread";
      case false:
        return "btn btn-light btn-sm read";
    }
  }

  switchTooltip() {
    const {status} = this.state;
    switch (status) {
      case true:
        return "mark as read";
      case false:
        return "mark as unread";
    }
  }

  render() {
    const {notification,listClass} = this.props;
    const {status} = this.state;

    let default_avatar = notification.actor.profile_image || profileAvatar;
    return (
      <li className={listClass}>
        <img
          src={default_avatar} alt="avatar"
          className="followers-avatar rounded-circle" />
        <button type="button" className="btn btn-link">{notification.actor.username}</button>
        {notification.verb}
        <span className="float-right">
          <button type="button" data-toggle="tooltip" data-placement="top" title={this.switchTooltip()} className={this.switchClass()} onClick={this.onClick}>
            <i className="fas fa-check-circle" />
            {notification.status}
          </button>
        </span>
        <br />
        <i className="text-muted">
          <span className="fas fa-clock " />
          {notification.timesince}
        </i>
      </li>
    );
  }

}

NotificationItem.propTypes = {
  notification: PropTypes.object.isRequired,
  listClass: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  return {
    notifications: state.Notifications
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(notificationActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationItem);
