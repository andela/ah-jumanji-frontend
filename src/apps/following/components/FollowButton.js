/* eslint-disable react/no-did-update-set-state */
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
        storedMyFollowing: {},
        following: false
    };
    this.handleFollow = this.handleFollow.bind(this);
    this.checkIfFolllowed = this.checkIfFolllowed.bind(this);
}
componentDidMount() {
    const { actions } = this.props;
    actions.getFollowed();
}

componentDidUpdate(){
    const { myfollowing, username } = this.props;
    const { storedMyFollowing } = this.state;
    if(username !== undefined && myfollowing !== storedMyFollowing){
        this.checkIfFolllowed();
        this.setState({storedMyFollowing: myfollowing});
    }
}

checkIfFolllowed(){
    const {myfollowing, username} = this.props;
    if(username === undefined) return;

    if (myfollowing !== undefined){
        if(myfollowing.followed === undefined) return;

        const foundUser = myfollowing.followed.find(user => user.followed.username === username);
        if(foundUser === undefined) return;

        this.setState({following: true});
    }
}

handleFollow(){
    const { actions } = this.props;
    const { username } = this.props;
    const { following } = this.state;

    if (following) {
        actions.unfollowUser(username);
        this.setState({following: false});
    }
    else{
        actions.followUser(username);
        this.setState({following: true});
    }
}
render() {
    const {following} = this.state;
    return (
      <div className="button">
        <button type="button" className="btn btn-outline-success" onClick={this.handleFollow}>{following ? "Following": "Follow"}</button>
      </div>
    );
}
}
FollowButton.propTypes = {
    actions: PropTypes.object.isRequired,
    username: PropTypes.string.isRequired,
    myfollowing: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        myfollowing: state.followingReducer.following
    };
  }
function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(followActions, dispatch)
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(FollowButton);
