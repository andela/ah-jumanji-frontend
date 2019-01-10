// Module sets up user registration
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class RegistrationPage extends Component {
  constructor(props){
    super(props);
    this.state = {
    //
    };
  }
  render() {
    return (
      <div className="col-md-6">
        <div className="panel panel-default" id="login-form">
          <div className="panel-heading">
            <h3>Create Account.</h3>
            <hr />
          </div>
          <div className="panel-body">
            <div className="alert alert-success" id="signuphiddenelement" role="alert">
              Successfully Signed up
            </div>
            {/* Register Form */}
            <form>
              <div className="alert alert-success" id="signuphiddenelement" role="alert">
                Successfully signed up. An email has been sent to you for verification.
              </div>
              <div className="form-group">
                <label htmlFor="username">
                  Username
                  <input type="text" className="form-control" id="username" minLength="4" maxLength="30" placeholder="Enter Username" required />
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="email">
                  Email address
                  <input type="email" className="form-control" id="email" placeholder="Enter email" required />
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">
                  Password
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" required />
                </label>
              </div>
              <button type="submit" className="btn btn-success btn-block" onClick={registerUser}>Submit</button>
              <hr />
              Already have an account?
              <NavLink to="login">Login</NavLink>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const registerUser = () => {

};

export default RegistrationPage;
