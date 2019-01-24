import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import $ from 'jquery';
import * as notificationActions from "../actions/notificationActions";
import NotificationItem from "./NotificationItem";
import NotificationTabContent from "./notificationTabsComponent";
import NotificationTabToggle from "./notificationTabTogleComponent";


class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      read_notifications: [],
      unread_notifications: [],
      fetched: false
    };
    this.markAllasRead = this.markAllasRead.bind(this);
  }

  componentDidMount() {
    let {_asyncRequest} = this;
    _asyncRequest = notificationActions.getUnreadNotificationsCount().then(values => {
      values = notificationActions.handleNullResponse(values);
      _asyncRequest = null;
      this.setState({unread_notifications: values, fetched: true});
    })
  .then(() => {
      _asyncRequest = notificationActions.getReadNotificationsCount().then(values => {
        values = notificationActions.handleNullResponse(values);
        _asyncRequest = null;
        this.setState({read_notifications: values, fetched: true});
      });
    });

    // use Jquery to keep the dropdown open
    $(document).ready(function () {
      $('.dropdown').on('hide.bs.dropdown', function (e) {
        let target = $(e.target);
        if (target.hasClass("show") || target.parents(".show").length) {
          return false; // returning false should stop the dropdown from hiding.
        } else {
          return true;
        }
      });

      // $(".overlay").on('click',function () {
      //   document.getElementsByClassName("overlay").style.height = "100%";
      // })

      // $('body:not(exclude-click)').on('click', function (e) {
      //   let target = $(e.target);
      //   console.log(target);
      //   let element = document.getElementsByClassName('scrollable-menu show');
      //   console.log(element);
      //   if (element.length > 0) {
      //     console.log(element);
      //     element[0].classList.remove("show");
      //   }
      // });
    });

  }

  componentWillUnmount() {
    let {_asyncRequest} = this;
    if (_asyncRequest) {
      _asyncRequest.cancel();
    }
    notificationActions.cache.clear();

  }

  markAllasRead() {
    const {actions} = this.props;
    actions.markAllNotificationsRead();
    this.forceUpdate();
  }


  render() {
    const {unread_notifications, read_notifications, fetched} = this.state;
    let content = null;
    let read_content = null;
    let default_message = "There are no notifications to display  here";

    if (fetched === false) {
      // Render loading state ...
      return (
        <ul className="dropdown-menu scrollable-menu notifications" role="menu" aria-labelledby="navbarDropdown">
          <li className="dropdown-item">Loading...</li>
        </ul>
      );
    } else {
      // Render real UI ...
      if (unread_notifications.length > 0) {
        content = unread_notifications.map(notification => {
          return <NotificationItem key={notification.id} notification={notification} listClass="dropdown-item" />;
        });
      } else {
        content = <li className="dropdown-item">{default_message}</li>;
      }

      if (read_notifications.length > 0) {
        read_content = read_notifications.map(notification => {
          return <NotificationItem key={notification.id} notification={notification} listClass="dropdown-item" />;
        });
      } else {
        read_content = <li className="dropdown-item">{default_message}</li>;
      }

      let unread = <ul>{content}</ul>;
      let read = <ul>{read_content}</ul>;
      return (
        <ul className="dropdown-menu scrollable-menu notifications" role="menu" aria-labelledby="navbarDropdown">
          <div className="dropdown-header">
            <ul className=" nav nav-pills">
              <NotificationTabToggle label="Unread Notifications" target="#unread" />
              <NotificationTabToggle label="Read Notifications" target="#read" />
            </ul>
          </div>
          <div className="tab-content">
            <NotificationTabContent content={unread} id="unread" onclick={this.markAllasRead} />
            <NotificationTabContent content={read} id="read" />
          </div>
        </ul>
      );
    }
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
