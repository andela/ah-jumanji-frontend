/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div className="row login-container">
        <div className="col-md-6">
          <div className="bg-circle-1 bg-circle" />
          <div className="bg-circle-2 bg-circle" />
          <div className="bg-circle-3 bg-circle" />
          <div className="welcome">
            <div className="contact-details">
              <h2 className="text-muted">
              Have any queries?
              </h2>
              <i className="fas fa-mobile" />
              +254712991415
              <br />
              <i className="fas fa-envelope" />
              <a href="mailto:info@authorshaven.com"> info@authorshaven.com</a>
              <br />
              <i className="fas fa-map-marker-alt" />
              Along Mombasa - Malindi Highway
              <br />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="panel panel-default" id="login-form">
            <div className="panel-heading">
              <h2 className="text-muted">Get in touch!</h2>
            </div>
            <div className="panel-body">
              <form method="POST" id="send" action="">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input id="name" type="text" className="form-control" name="name" placeholder="Your Name" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input id="email" type="text" className="form-control" name="email" placeholder="Your Email" />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <input id="subject" type="text" className="form-control" name="subject" placeholder="Subject" />
                </div>
                <div className="form-group">
                  <textarea id="message" type="text" className="form-control" name="message" placeholder="Enter Message..." rows="4" />
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-success btn-block" name="contact" value="Submit"> Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
