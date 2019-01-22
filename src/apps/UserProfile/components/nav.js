import React from 'react';

const Nav = (props) => {

    const { profilePic } = props;

    return (
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <a className="navbar-brand" href="home.html">{"Author's Haven"}</a>
          <div className="" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto pull-left">
              <span className="sm-hide">
                <li className="nav-item"> <a href="home.html" className="nav-link"> <i className="fas fa-home"></i> Home</a> </li>
                <li className="nav-item dropdown">
                  <a href="notifications.html" className="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="badge badge-danger notifications-badge">5</span>
                    <i className="fas fa-bell"></i>
                    Notifications
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li className="dropdown-item">
                      <img src="assets/img/default-avatar1.jpg" alt="follower avatar" className="followers-avatar rounded-circle" />
                      <a href="#">Edward Snowden</a> published a new article.
                      <span className="float-right"> <a href="#" className="btn btn-light btn-sm"> <i className="fas fa-check-circle"></i> Mark As Read</a> </span>
                      <br />
                      <i className="text-muted"> <span className="fas fa-clock "></span> 5 Hrs ago</i>
                    </li>
                    <div className="dropdown-divider"></div>
                    <li className="dropdown-item">
                      <img src="assets/img/default-avatar1.jpg" alt="follower avatar" className="followers-avatar rounded-circle" />
                      <a href="#">Edward Snowden</a> published a new article.
                      <span className="float-right"> <a href="#" className="btn btn-light btn-sm"> <i className="fas fa-check-circle"></i> Mark As Read</a> </span>
                      <br />
                      <i className="text-muted"> <span className="fas fa-clock "></span> 5 Hrs ago</i>
                    </li>
                    <div className="dropdown-divider"></div>
                    <li className="dropdown-item">
                      <img src="assets/img/default-avatar1.jpg" alt="follower avatar" className="followers-avatar rounded-circle" />
                      <a href="#">Edward Snowden</a> published a new article.
                      <span className="float-right"> <a href="#" className="btn btn-light btn-sm"> <i className="fas fa-check-circle"></i> Mark As Read</a> </span>
                      <br />
                      <i className="text-muted"> <span className="fas fa-clock "></span> 5 Hrs ago</i>
                    </li>
                    <div className="dropdown-divider"></div>
                    <li className="dropdown-item">
                      <img src="assets/img/default-avatar1.jpg" alt="follower avatar" className="followers-avatar rounded-circle" />
                      <a href="#">Edward Snowden</a> published a new article.
                      <span className="float-right"> <a href="#" className="btn btn-light btn-sm"> <i className="fas fa-check-circle"></i> Mark As Read</a> </span>
                      <br />
                      <i className="text-muted"> <span className="fas fa-clock "></span> 5 Hrs ago</i>
                    </li>
                    <div className="dropdown-divider"></div>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img src={profilePic} alt="follower avatar" className="followers-avatar navbar-avatar rounded-circle" />
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="/profile"><i className="fas fa-user"></i> Profile</a></li>
                    <div className="dropdown-divider"></div>
                    <li><a className="dropdown-item" href="index.html"><i className="fas fa-sign-out-alt"></i> Logout</a></li>
                  </ul>
                </li>
              </span>
              <li className="nav-item dropdown sm-dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="fas fa-align-right"></i>
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li> <a href="notifications.html" className="dropdown-item"> <span className="badge badge-danger">5</span> <i className="fas fa-bell"></i> Notifications</a> </li>
                  <li><a className="dropdown-item" href="/profile"><i className="fas fa-user"></i> Profile</a></li>
                  <div className="dropdown-divider"></div>
                  <li><a className="dropdown-item" href="index.html"><i className="fas fa-sign-out-alt"></i> Logout</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default Nav;