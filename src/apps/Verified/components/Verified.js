/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from 'react';

class Verified extends Component {
  render() {
    return (
      <div className="row login-container">
        <div className="col-md-6 offset-md-3">
          <div className="bg-circle-1 bg-circle" />
          <div className="bg-circle-2 bg-circle" />
          <div className="bg-circle-3 bg-circle" />
          <div className="panel panel-default" id="login-form">
            <div className="panel-heading">
              <h3>Verify.</h3>
              <hr />
            </div>
            <div className="panel-body">
              <form>
                <div className="alert alert-primary" role="alert">
                  Enter your Password.
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Enter Password" required />
                </div>
                <div className="form-group">
                  <label htmlFor="confirmpassword">Confirm Password</label>
                  <input type="password" className="form-control" id="confirmpassword" placeholder="Confirm Password" required />
                </div>
                <button type="submit" className="btn btn-success btn-block">Submit</button>
                <hr />
                Don't have an account?
                <a href="/register">Register.</a>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Verified;
