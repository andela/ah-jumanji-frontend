import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

import accountOnIcon from "../../../assets/img/account-on.png";

class RegisterRedirect extends Component {
  render() {
    // Send request to activate user
    this.componentDidMount(
      // Make api request to activate user
    );
    return (
      <div className="row">
        <div className="bg-circle-1 bg-circle" />
        <div className="bg-circle-2 bg-circle" />
        <div className="bg-circle-3 bg-circle" />
        <div className="register-redirect-modal">
          <img id="success-icon" src={accountOnIcon} alt="success-icon" />
          <p>
            Account Activated!
          </p>
          <a href="/login">You can now login here</a>
        </div>
      </div>
    );
  }
}
export default withRouter(RegisterRedirect);