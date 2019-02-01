/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

// Local imports
import { getFollowers , getFollowed } from '../actions/followActions';


class Follow extends Component {
    componentDidMount() {
        const {getFollowers , getFollowed} = this.props;
        getFollowers();
        getFollowed();
    }
    render() {
      const {myfollowers, myfollowing} = this.props;
      let folowers_count = 0;
      let following_count = 0;
      if(myfollowing.followed !== undefined){
        folowers_count = myfollowers.followers.length;
        following_count = myfollowing.followed.length;
      }
        return (
          <div className="col-md-12">
            <ul className="nav justify-content-center">
              <li className="nav-item" id="articles">
                <a className="nav-link">
                  <span className="badge badge-pill badge-secondary">2</span>
                  Articles
                </a>
              </li>
              <li className="nav-item" id="followers">
                <a className="nav-link">
                  <span className="badge badge-pill badge-secondary">{folowers_count}</span>
                  Followers
                </a>
              </li>
              <li className="nav-item" id="following">
                <a className="nav-link">
                  <span className="badge badge-pill badge-secondary">{following_count}</span>
                  Following
                </a>
              </li>
            </ul>
          </div>
        );
    }
}
Follow.propTypes = {
    myfollowers: PropTypes.object.isRequired,
    myfollowing: PropTypes.object.isRequired,
    getFollowers: PropTypes.func.isRequired,
    getFollowed: PropTypes.func.isRequired
};
function mapStateToProps(state) {
  return {
    myfollowers: state.followingReducer.followers,
    myfollowing: state.followingReducer.following
  };
}
export default connect(mapStateToProps, { getFollowers , getFollowed })(Follow);