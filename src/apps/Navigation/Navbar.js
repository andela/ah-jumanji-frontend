import React from "react";
import { NavLink } from "react-router-dom";


const Navigation = () => (
  <nav className="navbar navbar-expand-lg navbar-light fixed-top">
    <div className="container">
      <NavLink to="/" className="navbar-brand">
        Author&apos;s Haven
      </NavLink>
      <div className="" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto pull-left">
          <span className="sm-hide">
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                <i className="fas fa-info-circle" />
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">
                <i className="fas fa-comments" />
                Contact Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/" className="btn btn-outline-warning btn-sm">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/register" className="btn btn-outline-success btn-sm">
                Signup
              </NavLink>
            </li>
          </span>
          <li className="nav-item dropdown sm-dropdown">
            <button type="button" className="nav-link dropdown-toggle" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fas fa-align-right" />
            </button>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <NavLink to="/register" className="dropdown-item">
                  <i className="fas fa-info-circle" />
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="dropdown-item">
                  <i className="fas fa-comments" />
                  Contact Us
                </NavLink>
              </li>
              <div className="dropdown-divider" />
              <li>
                <NavLink to="/" className="dropdown-item">
                  <i className="fas fa-sign-in-alt" />
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink to="/register" className="dropdown-item">
                  <i className="fas fa-sign-in-alt" />
                  Signup
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navigation;
