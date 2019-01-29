import React from 'react';
import PropTypes from 'prop-types';

export default function NavLink(props) {
  const {url, label, id, classname} = props;
  return (
    <a
      className={classname} id={id} data-toggle="tab" href={url} role="tab"
      aria-controls="nav-home" aria-selected="true">
      {label}
    </a>
  );
}

NavLink.propTypes = {
  url: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  classname: PropTypes.string
};

NavLink.defaultProps = {
  classname: "nav-item nav-link"
};
