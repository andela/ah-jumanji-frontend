import React from 'react';
import PropTypes from 'prop-types';

const NavNotify = (props) => {

  const { src, link, name, notification, markread, time } = props;

  return (
    <li className="dropdown-item">
      <img src={src} alt="follower avatar" className="followers-avatar rounded-circle" />
      <a href={link}>{name}</a>
        {notification}
      <span className="float-right">
        <a href={link} className="btn btn-light btn-sm">
          <i className="fas fa-check-circle" />
          {markread}
        </a>
      </span>
      <br />
      <i className="text-muted">
        <span className="fas fa-clock" />
        {time}
      </i>
    </li>
  );
};

const navNotifyPropTypes = {
  src: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  notification: PropTypes.string.isRequired,
  markread: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired
};

NavNotify.propTypes = navNotifyPropTypes;

export default NavNotify;
