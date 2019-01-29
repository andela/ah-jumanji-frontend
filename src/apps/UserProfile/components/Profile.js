import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { viewProfile } from '../actions/profile';
import countries from './countries';


class Profile extends React.Component {

  componentDidMount() {
    const { viewProfile } = this.props;
    viewProfile();
  }

  render() {

    const { profile } = this.props;
    const { country } = profile;
    const fullCountryName = countries[country];

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 profile-content">
              <div className="row">
                <div className="col-md-3">
                  <img src={profile.profile_photo} alt="" id="user-profile-picture" className="rounded-circle profile-avatar" />
                </div>
                <div className="col-md-9">
                  <br />
                  <h3>
                    {profile.username}
                    <Link to="profile/edit">
                      <button type="button" className="btn btn-outline-secondary btn-sm edit-profile-button">
                        <i className="fas fa-user-cog" />
                          Edit Profile
                      </button>
                    </Link>
                  </h3>
                  <div>
                    <li style={{ listStyleType: "none" }}>
                      <strong>
                        {profile.first_name}
                        &nbsp;
                        {profile.last_name}
                      </strong>
                    </li>
                    <li style={{ listStyleType: "none" }}>
                      {profile.bio}
                    </li>
                    <li style={{ listStyleType: "none" }}>
                      <i className="fas fa-globe-africa" />
                      &nbsp;
                      {fullCountryName}
                    </li>
                    <li style={{ listStyleType: "none" }}>
                      <i className="fas fa-phone" />
                      &nbsp;
                      {profile.phone_number}
                    </li>
                    <li style={{ listStyleType: "none" }}>
                      {profile.twitter_handle}
                    </li>
                    <li style={{ listStyleType: "none" }}>
                      <a href={profile.website}>{profile.website}</a>
                    </li>
                  </div>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>

    );
  }
}

Profile.propTypes = {
  profile: PropTypes.object.isRequired,
  viewProfile: PropTypes.func.isRequired
};

const mapStateToProps = ({ profileReducer }) => profileReducer;

export default connect(mapStateToProps, { viewProfile })(Profile);
