import React from 'react';
import {navPropTypes} from "./navbarItem";


const NavButton = (props) => {

  const {classname, link, label} = props;

  return (
    <li className="nav-item">
      <a href={link} className={classname}>
        {label}
      </a>
    </li>
  );
};

NavButton.propTypes = navPropTypes;

export default NavButton;
