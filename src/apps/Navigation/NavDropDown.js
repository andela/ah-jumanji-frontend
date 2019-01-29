import React from 'react';
import {navPropTypes} from "./NavItem";

const DropDownItem = (props) => {

  const {classnameOuter, id, classname, link, label} = props;
  const onClick = (e) => {
    if(e.target.innerHTML.includes("Logout")){
      localStorage.clear();
      document.cookie = "token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
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
