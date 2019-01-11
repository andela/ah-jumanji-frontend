import React from 'react';
import {navPropTypes} from "./navbarItem";

const DropDownItem = (props) => {

  const {classname, link, label} = props;

  return (
    <li>
      <a href={link} className="dropdown-item">
        <i className={classname} />
        {label}
      </a>
    </li>
  );
};

DropDownItem.propTypes = navPropTypes;
export default DropDownItem;
