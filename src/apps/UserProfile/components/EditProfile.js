import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fileUploadHandler } from '../actions/cloudinary';
import Nav from './nav';


class EditProfile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: this.props.profile.username,
      profilePhoto: this.props.profile.profile_photo,
      website: this.props.profile.website,
      phoneNumber: this.props.profile.phone_number,
      bio: this.props.profile.bio,
      country: this.props.profile.country,
      twitterHandle: this.props.profile.twitter_handle,
      selectedFile: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.fileSelectedHandler = this.fileSelectedHandler.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { 
      username, 
      profilePhoto, 
      website, 
      phoneNumber, 
      bio, 
      country, 
      twitterHandle,
      selectedFile } = this.state;

      let profile = { "profile" : {username, profile_photo: profilePhoto, website, phone_number: phoneNumber, bio, country, twitter_handle: twitterHandle} 
    }

      this.props.fileUploadHandler(selectedFile, profile);
      

  }

  onChange = (e) => {
    this.setState({
      ...this.state, [e.target.name]: e.target.value
    })
  }

  fileSelectedHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    })
  }

  render () {
    const { profilePhoto } = this.state;
    return (
        <div>
          
          <Nav profilePic={profilePhoto} />
          <div className="container auth-container">
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <div className="panel panel-default">
                  <div className="panel-heading" />
                  <div className="">
                    <form>
                      <h3>Edit Profile.</h3>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" name='username' className="form-control" value={this.state.username} onChange={this.onChange} />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="country">Country</label>
                            <input type="text" className="form-control" name='country' value={this.state.country} onChange={this.onChange} />
                          </div>
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="image">Profile Photo</label>
                        <br />
                        <input type="file" id="image" onChange={this.fileSelectedHandler} />
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="website">Website</label>
                            <input type="text" className="form-control"  name='website' value={this.state.website} onChange={this.onChange} />
                          </div>
                        </div>
                      
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="twitterHandle">Twitter Handle</label>
                            <input type="text" className="form-control"  name='twitterHandle' value={this.state.twitterHandle} onChange={this.onChange} />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="phoneNumber">Phone Number</label>
                            <input type="text" className="form-control" name='phoneNumber' value={this.state.phoneNumber} onChange={this.onChange} />
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="bio">Bio</label>
                        <textarea name='bio' rows="8" cols="80" className="form-control" value={this.state.bio} onChange={this.onChange} />
                      </div>
                      <Link to="/profile">
                        <button type="submit" className="btn btn-success" onClick={this.handleSubmit}>Submit</button>
                      </Link>
                    </form>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

EditProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  fileUploadHandler: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  profile: state.profileReducer.profile
})


export default connect(mapStateToProps, { fileUploadHandler })(EditProfile);
