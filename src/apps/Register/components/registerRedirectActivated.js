import React, { Component } from 'react';
import * as registerActions from '../actions/registerActions';
import accountOnIcon from "../../../assets/img/account-on.png";

class RegisterRedirect extends Component {
  render() {
    // Send request to activate user
    document.addEventListener('DOMContentLoaded', () => {
      // Extract user id and token from props
      const urlParams = location.pathname.split("/");
      const uid = urlParams[2];
      const token = urlParams[3];

      // Make api request to activate user
      registerActions.ActivateUser(uid, token);
    });

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
export default RegisterRedirect;