import React from 'react';
import { bake_cookie } from 'sfcookies';
import {navPropTypes} from "./NavItem";

const DropDownItem = (props) => {

  const {classnameOuter, classname, link, label} = props;
  const onClick = (e) => {
    if(e.target.innerHTML.includes("Logout")){
      localStorage.clear();
      bake_cookie('token', '');
    }
  };

  return (
    <li>
      <a onClick={onClick} href={link} className={classnameOuter}>
        <i className={classname} />
        {"  " + label}
      </a>
    </li>
  );
};

DropDownItem.propTypes = navPropTypes;
export default DropDownItem;
