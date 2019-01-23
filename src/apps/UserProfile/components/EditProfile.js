import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { fileUploadHandler } from '../actions/cloudinary';
import Nav from './nav';
import countries from './countries';
import { EditFormInput } from '../../common/components/EditFormInput';

let dataValid = [];

class EditProfile extends Component {
  constructor(props) {
    super(props);
    const { profile } = this.props;
    const {
      first_name,
      last_name,
      profile_photo,
      website,
      phone_number,
      bio,
      country,
      twitter_handle } = profile;

    this.state = {
      firstName: first_name,
      lastName: last_name,
      profilePhoto: profile_photo,
      website: website,
      phoneNumber: phone_number,
      bio: bio,
      country: country,
      twitterHandle: twitter_handle,
      selectedFile: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.fileSelectedHandler = this.fileSelectedHandler.bind(this);
  }

  handleSubmit = (e) => {
    dataValid = [];
    e.preventDefault();
    const { fileUploadHandler } = this.props;
    const {
      firstName,
      lastName,
      profilePhoto,
      website,
      phoneNumber,
      bio,
      country,
      twitterHandle,
      selectedFile } = this.state;
    let profile = {
          "profile" : {
            first_name: firstName,
            last_name: lastName,
            profile_photo: profilePhoto,
            website: website,
            phone_number: phoneNumber,
            bio: bio,
            country: country,
            twitter_handle: twitterHandle,
          }
        };
    for (let key in profile.profile) {
      let value = profile.profile[key];
      let keyParams = key.split("_");
      keyParams.length > 1 ? key = keyParams[0] + keyParams[1].charAt(0).toUpperCase() + keyParams[1].substr(1) : keyParams;
      if(!["country", "profilePhoto", "bio" ].includes(key)) {
        this.validateUserInput(key, value);
        // set up an event listener to highlight errors
        document.querySelector(`input[name=${key}]`).addEventListener('focus', (e) => {
          e.target.classList.remove('highlight-error-input');
          e.target.parentElement.querySelector('p').classList.add('hidden');
          toast.dismiss();
        });
      }
    }
    dataValid.includes(false) ?  false : fileUploadHandler(selectedFile, profile);
  }

  onChange = (e) => {
    this.setState({
      ...this.state, [e.target.name]: e.target.value
    });

  }

  fileSelectedHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    });

  }

  validateUserInput(inputName, inputValue) {

    if (!inputValue) {
      let warningSubscript = document.querySelector(
        `input[name=${inputName}]`).parentElement.querySelector("p");

      // Display an error beneath appropriate input
      warningSubscript.classList.remove("hidden");
      warningSubscript.innerHTML = "This field may not be blank";
      // Highlight input that has no data
      document.querySelector(`input[name=${inputName}]`).classList.add('highlight-error-input');

      // Mark input as false/invalid
      dataValid.push(false);
    }
    else {
      dataValid.push(true);
    }
  }

  render () {
    const { profilePhoto } = this.state;
    const {
      firstName,
      lastName,
      website,
      twitterHandle,
      phoneNumber,
      bio
    } = this.state;

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
                        <EditFormInput label="First Name" inputType="text" inputName="firstName" value={firstName} onChange={this.onChange} />
                      </div>
                      <div className="col-md-6">
                        <EditFormInput label="Last Name" inputType="text" inputName="lastName" value={lastName} onChange={this.onChange} />
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="country">Country</label>
                          <select name="country" className="form-control" onChange={this.onChange} id="countriesDropdown">
                            {Object.keys(countries).map((key) => {
                              return <option value={key}>{countries[key]}</option>;
                            })}
                          </select>
                        </div>
                      </div>
                    </div>
                    <EditFormInput label="Profile Photo" inputType="file" inputName="profilePhoto" onChange={this.fileSelectedHandler} />
                    <div className="row">
                      <div className="col-md-6">
                        <EditFormInput label="Website" inputType="text" inputName="website" value={website} onChange={this.onChange} />
                      </div>
                      <div className="col-md-6">
                        <EditFormInput label="Twitter Handle" inputType="text" inputName="twitterHandle" value={twitterHandle} onChange={this.onChange} />
                      </div>
                      <div className="col-md-6">
                        <EditFormInput label="Phone Number" inputType="text" inputName="phoneNumber" value={phoneNumber} onChange={this.onChange} />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="bio">Bio</label>
                      <textarea name="bio" rows="8" cols="80" className="form-control" value={bio} onChange={this.onChange} />
                    </div>
                    <Link to="">
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
};

const mapStateToProps = ({ profileReducer }) => profileReducer;

export default connect(mapStateToProps, { fileUploadHandler })(EditProfile);
