import React from 'react';
import PropTypes from 'prop-types';


export default function NotificationTabToggle(props) {
  const {label, target, active} = props;
  let class_name = null;
  switch (active) {
    case false:
      class_name = "nav-item";
      break;
    case true:
      class_name = "nav-item active";
  }


  return (
    <li className={class_name}>
      <a className="nav-link" href={target} data-toggle="pill">{label}</a>
    </li>
  );
}

NotificationTabToggle.propTypes = {
  label: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
  active: PropTypes.bool
};

NotificationTabToggle.defaultProps = {
  active: false
};
