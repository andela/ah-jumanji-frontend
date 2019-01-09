/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from 'react';

class LoginForm extends Component {
  render() {
    return (
      <div className="col-md-6">
        <div className="panel panel-default" id="login-form">
          <div className="panel-heading">
            <h3>Login to Your Account.</h3>
            <hr />
          </div>
          <div className="panel-body">
            <div className="alert alert-success" id="hiddenelement" role="alert">
              Successfully Logged in.
            </div>
            <form>
              <div className="form-group">
                <label htmlfor="email">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="Enter email eg. example@gmail.com" required />
              </div>
              <div className="form-group">
                <label htmlfor="password">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Enter Password" required />
              </div>
              <button type="submit" className="btn btn-success btn-block" onClick="post()">Submit</button>
              <hr />
              <a href="forgotpassword.html">Forgot Password?</a>
              <br />
              Don't have an account?
              <a href="register.html" onClick="register()">Register.</a>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
