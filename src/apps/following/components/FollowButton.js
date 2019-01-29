/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';


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
    if (following == true) {
        this.setState({
            following: false
        });
    }
    else{
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
export default FollowButton;

