import React from "react";

import NavItem from "./NavItem";
import NavButton from "./NavButton";
import DropDownItem from './NavDropDown';
import {getUnreadNotificationsCount, handleNullResponse} from "../Notifiications/actions/notificationActions";
import NotificationsBadge from "../Notifiications/components/navBarNotificationsComponent";
import ProfPic from './profPic';

export class NotificationLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: {
        count: 0,
        fetched: false
      }
    };
  }

  componentDidMount() {
    let {_asyncRequest} = this;
    _asyncRequest = getUnreadNotificationsCount().then(value => {
      value = handleNullResponse(value);
      _asyncRequest = null;
      this.setState(
        {notifications: {count: value.length, fetched: true}}
      );
    });
  }

  componentWillUnmount() {
    const {_asyncRequest} = this;
    if (_asyncRequest) {
      _asyncRequest.cancel();
    }
  }

  render() {
    const {notifications} = this.state;

    if (!notifications.fetched) {
      return ("");
    } else {
      return (
        <React.Fragment>
          <NotificationsBadge notifications_count={notifications.count} />
        </React.Fragment>
      );
    }
  }
}

function notificationDropdownLink() {
  return(
    <a href="/a/notifications" className="dropdown-item">
      <i className="fas fa-bell" />
      Notifications
    </a>
  );
}

export const HomeLinks = () => (
  <React.Fragment>
    <NavItem classnameOuter="nav-link active" classname="fas fa-home" link="/a/home" label="Home" />
    <NavItem classnameOuter="nav-link" classname="fas fa-search" data-toggle="modal" data-target="#search" link="javascript:;" label="Search" />
    <NotificationLink />
    <li className="nav-item dropdown">
      <ProfPic />
      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        <DropDownItem classnameOuter="dropdown-item" classname="fas fa-user" link="/a/profile" label="Profile" />
        <div className="dropdown-divider" />
        <DropDownItem classnameOuter="dropdown-item" classname="fas fa-sign-out-alt" link="/" label="Logout" />
      </ul>
    </li>
    <NavButton classnameOuter="nav-link" classname="btn btn-success btn-sm fas fa-plus-square" link="/a/createarticle" label="&nbsp;Add Post" />
  </React.Fragment>
);

export const HomeLinksSm = () => (
  <React.Fragment>
    <li className="nav-item dropdown sm-dropdown">
      <button className="nav-link dropdown-toggle btn-link" type="button" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i className="fas fa-align-right" />
      </button>
      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        <DropDownItem classnameOuter="dropdown-item" classname="fas fa-plus-square" link="/a/createarticle" label="Add Post" />
        <DropDownItem classnameOuter="dropdown-item" classname="fas fa-plus-square" link="javascript:;" data-toggle="modal" data-target="#search" label="Search" />
        <li>
          {notificationDropdownLink()}
        </li>
        <DropDownItem classnameOuter="dropdown-item" classname="fas fa-user" link="/a/profile" label="Profile" />
        <div className="dropdown-divider" />
        <DropDownItem classnameOuter="dropdown-item" classname="fas fa-sign-out-alt" link="/" label="Logout" />
      </ul>
    </li>
  </React.Fragment>
);

export const NotAuthenticatedLinks = () => (
  <React.Fragment>
    <NavItem classnameOuter="nav-link" classname="fas fa-info-circle" link="/about" label="About Us" />
    <NavItem classnameOuter="nav-link" classname="fas fa-comments" link="/contact" label="Contact Us" />
    <NavButton classnameOuter="nav-link" classname="btn btn-outline-warning btn-sm" link="/" label="Login" />
    <NavButton classnameOuter="nav-link" classname="btn btn-outline-success  btn-sm" link="/register" label="Signup" />
  </React.Fragment>
);

export const NotAuthenticatedLinksSm = () => (
  <React.Fragment>
    <li className="nav-item dropdown sm-dropdown">
      <button
        type="button" className="nav-link dropdown-toggle" id="navbarDropdown" data-toggle="dropdown"
        aria-haspopup="true" aria-expanded="false">
        <i className="fas fa-align-right" />
      </button>
      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        <DropDownItem classnameOuter="dropdown-item" classname="fas fa-info-circle" link="/about" label="About Us" />
        <DropDownItem classnameOuter="dropdown-item" classname="fas fa-comments" link="/contact" label="Contact Us" />
        <div className="dropdown-divider" />
        <DropDownItem classnameOuter="dropdown-item" classname="fas fa-sign-in-alt" link="/" label="Login" />
        <DropDownItem classnameOuter="dropdown-item" classname="fas fa-sign-in-alt" link="/register" label="Signup" />
      </ul>
    </li>
  </React.Fragment>
);

export const AuthenticatedLinks = () => (
  <React.Fragment>
    <NavItem classnameOuter="nav-link" classname="fas fa-home" link="/a/home" label="Home" />
    <li className="nav-item dropdown">
      <button className="nav-link dropdown-toggle btn-link" type="button" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <img src={localStorage.profPic} alt="follower avatar" className="followers-avatar navbar-avatar rounded-circle" />
      </button>
      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        <DropDownItem classnameOuter="dropdown-item" classname="fas fa-user" link="/a/profile" label="Profile" />
        <div className="dropdown-divider" />
        <DropDownItem classnameOuter="dropdown-item" classname="fas fa-sign-out-alt" link="/" label="Logout" />
      </ul>
    </li>
  </React.Fragment>
);

export const AuthenticatedLinksSm = () => (
  <React.Fragment>
    <li className="nav-item dropdown sm-dropdown">
      <button className="nav-link dropdown-toggle" type="button" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i className="fas fa-align-right" />
      </button>
      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        <li>
          {notificationDropdownLink()}
        </li>
        <DropDownItem classnameOuter="dropdown-item" classname="fas fa-user" link="/a/profile" label="Profile" />
        <div className="dropdown-divider" />
        <DropDownItem classnameOuter="dropdown-item" classname="fas fa-sign-out-alt" link="/" label="Logout" />
      </ul>
    </li>
  </React.Fragment>
);
