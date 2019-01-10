/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from 'react';

class SocialAuthButtons extends Component {
  render() {
    return (
      <div>
        <h3 className="text-center">
        Or
        </h3>
        <div className="text-center">
          <div className="btn-group" role="group" aria-label="socialauth">
            <button type="button" className="btn btn-primary">
              <i className="fab fa-facebook-square" />
              Facebook
            </button>
            <button type="button" className="btn btn-danger">
              <i className="fab fa-google" />
              Google
            </button>
            <button type="button" className="btn btn-info">
              <i className="fab fa-twitter-square" />
              Twitter
            </button>
          </div>
        </div>
        <hr />
      </div>

    );
  }
}

export default SocialAuthButtons;
