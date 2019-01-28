import React from 'react';
import PropTypes from 'prop-types';

const DropDownNotification = (props) => {
  const {imgSrc, userName, message, period} = props;

  return (
    <li className="dropdown-item">
      <img src={imgSrc} alt="follower avatar" className="followers-avatar rounded-circle" />
      <button className="btn-link" type="button">
        &nbsp;
        {userName}
      </button>
      &nbsp;
      {message}
      <span className="float-right">
        <button className="btn-sm btn-link" type="button">
          <i className="fas fa-check-circle" />
          Mark As Read
        </button>
      </span>
      <br />
      <i className="text-muted">
        <span className="fas fa-clock " />
        &nbsp;
        {period}
        &nbsp;ago
      </i>
    </li>
  );
};

export const navNotificationPropTypes = {
  imgSrc: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired
};

DropDownNotification.propTypes = navNotificationPropTypes;

export default DropDownNotification;
