import React from 'react';
import PropTypes from 'prop-types';
import NavItem from '../../Navigation/NavItem';
import NavNotify from '../../Navigation/NavNotify';
import NavDrop from '../../Navigation/NavDrop';

const Nav = (props) => {

    const { profilePic } = props;

    return (
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <a className="navbar-brand" href="home.html">Author&apos;s Haven</a>
          <div className="" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto pull-left">
              <span className="sm-hide">
                <NavItem link="home.html" classnameOuter="nav-link" classname="fas fa-home" label="Home" />
                <li className="nav-item dropdown">
                  <NavDrop num="5" notifications="Notifications" />
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <NavNotify src="assets/img/default-avatar1.jpg" link="/notifications" name="Edward Snowden" notification="published a new article" markread="Mark as Read" time="5 Hrs ago" />
                    <div className="dropdown-divider" />
                    <NavNotify src="assets/img/default-avatar1.jpg" link="/notifications" name="Edward Snowden" notification="published a new article" markread="Mark as Read" time="5 Hrs ago" />
                    <div className="dropdown-divider" />
                    <NavNotify src="assets/img/default-avatar1.jpg" link="/notifications" name="Edward Snowden" notification="published a new article" markread="Mark as Read" time="5 Hrs ago" />
                    <div className="dropdown-divider" />
                    <NavNotify src="assets/img/default-avatar1.jpg" link="/notifications" name="Edward Snowden" notification="published a new article" markread="Mark as Read" time="5 Hrs ago" />
                    <div className="dropdown-divider" />
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img src={profilePic} alt="follower avatar" className="followers-avatar navbar-avatar rounded-circle" />
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">

                    <NavItem link="/profile" classnameOuter="dropdown-item" classname="fas fa-user" label="Profile" />
                    <div className="dropdown-divider" />
                    <NavItem link="index.html" classnameOuter="dropdown-item" classname="fas fa-sign-out-alt" label="Logout" />
                  </ul>
                </li>
              </span>
              <li className="nav-item dropdown sm-dropdown">
                <a className="nav-link dropdown-toggle" href="/notifications" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="fas fa-align-right" />
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <NavDrop num="5" notifications="Notifications" />
                  </li>
                  <NavItem link="/profile" classnameOuter="dropdown-item" classname="fas fa-user" label="Profile" />
                  <div className="dropdown-divider" />
                  <NavItem link="index.html" classnameOuter="dropdown-item" classname="fas fa-sign-out-alt" label="Logout" />
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
};

Nav.propTypes = {
  profilePic: PropTypes.string.isRequired
};

export default Nav;