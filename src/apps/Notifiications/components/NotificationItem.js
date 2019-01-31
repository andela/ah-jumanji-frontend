import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import ReactDOM from 'react-dom';
import profileAvatar from '../../../assets/img/profile-avatar.png';
import * as notificationActions from "../actions/notificationActions";


class NotificationItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: props.notification.unread,
      tooltips: ["mark as read", "mark as unread"],
      btnClasses: ["btn btn-light btn-sm unread", "btn btn-light btn-sm read"]
    };
    this.onClick = this.onClick.bind(this);
    this.getActionObjectLink = this.getActionObjectLink.bind(this);
    this.switchCase = this.switchCase.bind(this);
  }

  onClick() {
    // toggle the notifications status
    let {notification, actions} = this.props;
    let {status} = this.state;
    // actually query the API
    actions.toggleSpecificNotificationReadStatus(
      this.switchStatus(status),
      notification.id
    );
    //modify the local store
    let verbose = notificationActions.getCurrentStatus(status);
    notificationActions.removeNotification(verbose, notification.id);
    // modify the local state
    this.switchStatus(status);
  }


  getActionObjectLink() {
    const {notification} = this.props;
    let slug = null;
    switch (typeof (notification.action_object)) {
      case "string":
        slug = notification.action_object.replace("/api/articles/", "");
        slug = slug.replace("/", "");
        return "/a/article/" + slug;
      case "object":
        if (notification.hasOwnProperty('action_object') && notification.action_object.hasOwnProperty("follower")) {
          return '/a/followers';
        } else {
          // unmount the component if this object does not exist
          ReactDOM.unmountComponentAtNode(this);
        }
    }
  }

  switchCase(response) {
    const {status} = this.state;
    switch (status) {
      case true:
        return response[0];
      case false:
        // return "mark as unread";
        return response[1];
    }
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

  render() {
    const {notification, listClass} = this.props;
    const {tooltips, btnClasses} = this.state;
    let default_avatar = notification.actor.profile_image || profileAvatar;
    return (
      <li className={listClass}>
        <img src={default_avatar} alt="avatar" className="followers-avatar rounded-circle" />
        <a href={'/a/profile/' + notification.actor.username} className="btn btn-link">{notification.actor.username}</a>
        {notification.verb}
        {" ⟿ "}
        <a href={this.getActionObjectLink()}><i className="small">take me there</i></a>
        <span className="float-right">
          <button
            type="button" data-toggle="tooltip" data-placement="top" title={this.switchCase(tooltips)}
                  className={this.switchCase(btnClasses)} onClick={this.onClick}>
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
  listClass: PropTypes.string.isRequired,
  actions: PropTypes.object
};

NotificationItem.defaultProps = {
  actions: PropTypes.object
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
