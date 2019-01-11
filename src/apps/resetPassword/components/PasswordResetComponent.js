import React, {Component} from 'react';
import EmailReset from "./emailForm";

class ForgotPassword extends Component {
  render() {
    return (
      <div className="row login-container">
        <div className="col-md-6 offset-md-3">
          <div className="bg-circle-1 bg-circle" />
          <div className="bg-circle-2 bg-circle" />
          <div className="bg-circle-3 bg-circle" />
          <EmailReset />
        </div>
      </div>
    );
  }
}


export default ForgotPassword;
