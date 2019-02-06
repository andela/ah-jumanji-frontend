import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { read_cookie } from 'sfcookies';

// Import local files
import { fetchAuthorProfile } from '../actions/profile';
import FollowButton from '../../following/components/FollowButton';
import Articles from '../../Dashboard/components/Articles';
import Pagination from "../../Pagination/components/Pagination";


class AuthorProfile extends Component {
    constructor(props) {
      super(props);
      this.state = {
        currentPage: 1
      };
    }

    componentDidMount () {
        const { fetchAuthorProfile } = this.props;
        fetchAuthorProfile();
    }

    onPageChanged = data => {
      const { currentPage } = data;
      this.setState({ currentPage });
    };

    render() {
        const { currentPage } = this.state;
        const { authorProfile } = this.props;
        const loggedIn = read_cookie('loggedInUsername');
        if (loggedIn === authorProfile.user) {
          window.location.replace("/a/profile");
        }
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
                          <FollowButton username={authorProfile.user} />
                        </li>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <Articles currentPage={currentPage} user={authorProfile.user} />
                  <Pagination
                      totalRecords={24}
                      pageLimit={12}
                      pageNeighbours={0}
                      onPageChanged={this.onPageChanged}
                  />
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
