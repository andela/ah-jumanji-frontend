import React, {Component} from "react";
import PropTypes from "prop-types";
import 'jquery';

import * as Links from './Links';


class Navigation extends Component{
  render() {
    const {location} = this.props;
    return(
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <a className="navbar-brand" href={( location.pathname.indexOf('/a/') > -1) ? "/a/home" : "/"}>
            {"Author's Haven"}
          </a>
          <div className="" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto pull-left">
              {/* hidden in a small device */}
              <span className="sm-hide">
                { location.pathname=='/a/home' ?
                  <Links.HomeLinks /> :
                  ( location.pathname.indexOf('/a/') > -1) ?
                    <Links.AuthenticatedLinks /> :
                    <Links.NotAuthenticatedLinks />
                }
              </span>
              {/*Displayed on a small device*/}
              { location.pathname=='/a/home' ?
                <Links.HomeLinksSm /> :
                ( location.pathname.indexOf('/a/') > -1) ?
                  <Links.AuthenticatedLinksSm /> :
                  <Links.NotAuthenticatedLinksSm />
              }
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

Navigation.propTypes = {
  location: PropTypes.object.isRequired
};

export default Navigation;
