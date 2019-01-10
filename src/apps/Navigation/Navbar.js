/* eslint-disable react/no-unescaped-entities */
import React from "react";
//import { NavLink } from "react-router-dom";


const Navigation = () => (
  <nav className="navbar navbar-expand-lg navbar-light fixed-top">
    <div className="container">
      <a className="navbar-brand" href="/">
        Author's Haven
      </a>
      <div className="" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto pull-left">
          <span className="sm-hide">
            <li className="nav-item">
              <a href="/about" className="nav-link">
                <i className="fas fa-info-circle" />
              About Us
              </a>
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-link">
                <i className="fas fa-comments" />
              Contact Us
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="btn btn-outline-warning btn-sm">Login</a>
            </li>
            <li className="nav-item">
              <a href="/register" className="btn btn-outline-success  btn-sm">Signup</a>
            </li>
          </span>
          <li className="nav-item dropdown sm-dropdown">
            <button type="button" className="nav-link dropdown-toggle" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fas fa-align-right" />
            </button>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a className="dropdown-item" href="/about">
                  <i className="fas fa-info-circle" />
                About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="dropdown-item">
                  <i className="fas fa-comments" />
                Contact Us
                </a>
              </li>
              <div className="dropdown-divider" />
              <li>
                <a className="dropdown-item" href="/">
                  <i className="fas fa-sign-in-alt" />
                Login
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/register">
                  <i className="fas fa-sign-in-alt" />
                Sign Up
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navigation;
