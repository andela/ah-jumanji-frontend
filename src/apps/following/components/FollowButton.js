/* eslint-disable react/require-default-props */
import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';

//Local imports
import * as followActions from '../actions/followActions';


class FollowButton extends Component {
constructor(props){
    super(props);
    this.state = {
        following: false
    };
    this.handleFollow = this.handleFollow.bind(this);
}
handleFollow(){
    const { following } = this.state;
    const { actions } = this.props;
    const { username } = this.props;

    if (following === true) {
        actions.unfollowUser(username);
        this.setState({
            following: false
        });
    }
    else{
        actions.followUser(username);
        this.setState({
            following: true
        });
    }
}
render() {
    const { following } = this.state;
    return (
      <div className="button">
        <button type="button" className="btn btn-outline-success" onClick={this.handleFollow}>{following ? "Following": "Follow"}</button>
      </div>
    );
}
}
FollowButton.propTypes = {
    actions: PropTypes.object.isRequired,
    username: PropTypes.string
};

function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(followActions, dispatch)
    };
  }

export default connect(null, mapDispatchToProps)(FollowButton);
