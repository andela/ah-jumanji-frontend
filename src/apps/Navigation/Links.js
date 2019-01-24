import React from "react";

import NavItem from "./NavItem";
import NavButton from "./NavButton";
import DropDownItem from './NavDropDown';
import DropDownNotification from './NavDropDownNotification';
import defaultUserIcon from '../../assets/img/default-avatar.jpg';


const NotificationLink = () => (
  <React.Fragment>
    <button className="nav-link dropdown-toggle btn-link" type="button" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <span className="badge badge-danger notifications-badge">
        2
      </span>
      <i className="fas fa-bell" />
      Notifications
    </button>
  </React.Fragment>
);

export const HomeLinks = () => (
  <React.Fragment>
    <NavItem classnameOuter="nav-link active" classname="fas fa-home" link="/a/home" label="Home" />
    <NavItem classnameOuter="nav-link" classname="fas fa-search" data-toggle="modal" data-target="#search" link="javascript:;" label="Search" />
    <li className="nav-item dropdown">
      <NotificationLink />
      <ul className="dropdown-menu" id="dropDownNotifications" aria-labelledby="navbarDropdown">
        <DropDownNotification imgSrc={defaultUserIcon} userName="Edward Snowden" message="published an article" period="5 hrs" />
        <div className="dropdown-divider" />
        <DropDownNotification imgSrc={defaultUserIcon} userName="Edward Snowden" message="published an article" period="5 hrs" />
        <div className="dropdown-divider" />
      </ul>
    </li>
    <li className="nav-item dropdown">
      <button className="nav-link dropdown-toggle btn-link" type="button" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <img src={defaultUserIcon} alt="follower avatar" className="followers-avatar navbar-avatar rounded-circle" />
      </button>
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
          <a href="/a/notifications" className="dropdown-item">
            <span className="badge badge-danger">
            5
            </span>
            <i className="fas fa-bell" />
            Notifications
          </a>
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
      <button type="button" className="nav-link dropdown-toggle btn-link" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span className="badge badge-danger notifications-badge">
        2
        </span>
        <i className="fas fa-bell" />
        Notifications
      </button>
      <ul className="dropdown-menu" id="dropDownNotifications" aria-labelledby="navbarDropdown">
        <DropDownNotification imgSrc={defaultUserIcon} userName="Edward Snowden" message="published an article" period="5 hrs" />
        <div className="dropdown-divider" />
        <DropDownNotification imgSrc={defaultUserIcon} userName="Edward Snowden" message="published an article" period="5 hrs" />
        <div className="dropdown-divider" />
      </ul>
    </li>
    <li className="nav-item dropdown">
      <button className="nav-link dropdown-toggle btn-link" type="button" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <img src={defaultUserIcon} alt="follower avatar" className="followers-avatar navbar-avatar rounded-circle" />
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
          <a href="/a/notifications" className="dropdown-item">
            <span className="badge badge-danger">
            5
            </span>
            <i className="fas fa-bell" />
            Notifications
          </a>
        </li>
        <DropDownItem classnameOuter="dropdown-item" classname="fas fa-user" link="/a/profile" label="Profile" />
        <div className="dropdown-divider" />
        <DropDownItem classnameOuter="dropdown-item" classname="fas fa-sign-out-alt" link="/" label="Logout" />
      </ul>
    </li>
  </React.Fragment>
);
