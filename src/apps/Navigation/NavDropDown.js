import React from 'react';
import {navPropTypes} from "./NavItem";

const DropDownItem = (props) => {

  const {classnameOuter, classname, link, label} = props;

  return (
    <li>
      <a href={link} className={classnameOuter}>
        <i className={classname} />
        {"  " + label}
      </a>
    </li>
  );
};

DropDownItem.propTypes = navPropTypes;
export default DropDownItem;
