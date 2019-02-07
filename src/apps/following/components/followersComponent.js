/* eslint-disable react/no-did-update-set-state */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

// Local imports
import { getFollowers , getFollowed } from '../actions/followActions';


class Follow extends Component {
  constructor(props){
    super(props);
    this.state = {
      followed: [],
      followers_count: 0,
      following_count: 0
    };
  }
  componentDidMount() {
      const {getFollowers , getFollowed} = this.props;
      getFollowers();
      getFollowed();
  }

  componentDidUpdate(){
    const { follow } = this.props;
    const {followed} = this.state;

    if(follow.following.followed !== followed){
      this.setState({
        followed: follow.following.followed,
        followers_count: follow.followers.followers === undefined ? 0 : follow.followers.followers.length,
        following_count: follow.following.followed === undefined ? 0 : follow.following.followed.length
      });
    }
  }
  render() {
      const {followers_count, following_count} = this.state;
      return (
        <div className="col-md-12">
          <ul className="nav justify-content-center">
            <li className="nav-item" id="articles">
              <a className="nav-link">
                Articles
              </a>
            </li>
            <li className="nav-item" id="followers">
              <p className="nav-link">
                <span className="badge badge-pill badge-secondary">{followers_count}</span>
                Followers
              </p>
            </li>
            <li className="nav-item" id="following">
              <p className="nav-link">
                <span className="badge badge-pill badge-secondary">{following_count}</span>
                Following
              </p>
            </li>
          </ul>
        </div>
      );
  }
}
Follow.propTypes = {
    follow: PropTypes.object.isRequired,
    getFollowers: PropTypes.func.isRequired,
    getFollowed: PropTypes.func.isRequired
};
function mapStateToProps(state) {
  return {
    follow: state.followingReducer
  };
}
export default connect(mapStateToProps, { getFollowers , getFollowed })(Follow);