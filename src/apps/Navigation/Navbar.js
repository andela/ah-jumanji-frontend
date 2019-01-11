import React from "react";
import NavItem from "./navbarItem";
import NavButton from "./NavButton";
import DropDownItem from "./NavDropDown";


const Navigation = () => (
  <nav className="navbar navbar-expand-lg navbar-light fixed-top">
    <div className="container">
      <a className="navbar-brand" href="/">
        {"Author's Haven"}
      </a>
      <div className="" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto pull-left">
          <span className="sm-hide">
            <NavItem classname="fas fa-info-circle" link="/about" label="About Us" />
            <NavItem classname="fas fa-comments" link="/contact" label="Contact Us" />
            <NavButton classname="btn btn-outline-warning btn-sm" link="/login" label="Login" />
            <NavButton classname="btn btn-outline-success  btn-sm" link="/register" label="Signup" />
          </span>
          <li className="nav-item dropdown sm-dropdown">
            <button
              type="button" className="nav-link dropdown-toggle" id="navbarDropdown" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false">
              <i className="fas fa-align-right" />
            </button>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <DropDownItem classname="fas fa-info-circle" link="/about" label="About Us" />
              <DropDownItem classname="fas fa-comments" link="/contact" label="Contact Us" />
              <div className="dropdown-divider" />
              <DropDownItem classname="fas fa-sign-in-alt" link="/login" label="Login" />
              <DropDownItem classname="fas fa-sign-in-alt" link="/register" label="Signup" />
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navigation;

