/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
import  React, { Component } from 'react';
import LoginContainer from '../../Login/components/LoginContainer';

class IndexPage extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <a className="navbar-brand" href="index.html">Author's Haven</a>
            <div className="" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto pull-left">
                <span className="sm-hide">
                  <li className="nav-item">
                    <a href="aboutus.html" className="nav-link">
                      <i className="fas fa-info-circle" />
                    About Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="contactus.html" className="nav-link">
                      <i className="fas fa-comments" />
                    Contact Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="btn btn-outline-warning btn-sm">Login</a>
                  </li>
                  <li className="nav-item">
                    <a href="register.html" className="btn btn-outline-success  btn-sm">Signup</a>
                  </li>
                </span>
                <li className="nav-item dropdown sm-dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fas fa-align-right" />
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a className="dropdown-item" href="aboutus.html">
                        <i className="fas fa-info-circle" />
                      About Us
                      </a>
                    </li>
                    <li>
                      <a href="contactus.html" className="dropdown-item">
                        <i className="fas fa-comments" />
                      Contact Us
                      </a>
                    </li>
                    <div className="dropdown-divider" />
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="fas fa-sign-in-alt" />
                      Login
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="register.html">
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
        <LoginContainer />
      </div>
    );
  }
}
export default IndexPage;
