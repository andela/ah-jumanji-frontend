import React from 'react';
import PropTypes from 'prop-types';


const NavItem = (props) => {

  const {classnameOuter, classname, link, label} = props;

  return (
    <li className="nav-item">
      <a href={link} className={classnameOuter}>
        <i className={classname} />
        {label}
      </a>
    </li>
  );
};

export const navPropTypes = {
  classname: PropTypes.string.isRequired,
  classnameOuter: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

NavItem.propTypes = navPropTypes;

export default NavItem;
