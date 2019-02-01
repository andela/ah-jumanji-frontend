import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { read_cookie } from 'sfcookies';

// Import local files
import { fetchAuthorProfile } from '../actions/profile';
import FollowButton from '../../following/components/FollowButton';




class AuthorProfile extends Component {
    componentDidMount () {
        const { fetchAuthorProfile } = this.props;
        fetchAuthorProfile();
    }
    render() {
        const { authorProfile } = this.props;
        const loggedIn = read_cookie('loggedInUsername');
        return (
          <div>
            <div className="container">
              <div className="row">
                <div className="col-md-12 profile-content">
                  <div className="row">
                    <div className="col-md-3">
                      <img src={authorProfile.profile_photo} alt="" id="user-profile-picture" className="rounded-circle profile-avatar" />
                    </div>
                    <div className="col-md-9">
                      <br />
                      <h3>
                        {authorProfile.user}
                      </h3>
                      <div>
                        <li style={{ listStyleType: "none" }}>
                          {authorProfile.bio}
                        </li>
                        <li style={{ listStyleType: "none" }}>
                          {
                            loggedIn === authorProfile.user ? (false) : (
                              <FollowButton username={authorProfile.user} />
                            )
                        }
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
AuthorProfile.propTypes = {
    fetchAuthorProfile: PropTypes.func.isRequired,
    authorProfile: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
      authorProfile: state.profileReducer.authorProfile
    };
  }
export default connect(mapStateToProps, { fetchAuthorProfile })(AuthorProfile);