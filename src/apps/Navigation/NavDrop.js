import React from 'react';
import PropTypes from 'prop-types';

const NavDrop = (props) => {
  const { num, notifications } = props;

  return (
    <a href="notifications.html" className="dropdown-item">
      <span className="badge badge-danger">{num}</span>
      <i className="fas fa-bell" />
      {notifications}
    </a>
  );
};

const navDropPropTypes = {
  num: PropTypes.string.isRequired,
  notifications: PropTypes.string.isRequired
};

NavDrop.propTypes = navDropPropTypes;

export default NavDrop;
