import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {read_cookie} from 'sfcookies';
import FollowButton from '../../following/components/FollowButton';

import config from "../../../config/config";

class LikesViewComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reaction: props.reaction,
    };
  }

  render() {
    const {reaction} = this.state;
    let {user} = reaction;
    let {username, image} = user;

    if (!image) {
      const {profile_photo} = user;
      image = profile_photo;
    }

    return (
      <li className="list-group-item">
        <img
          src={image || config.defaultImage}
          alt="follower avatar"
          className="followers-avatar message-avatar rounded-circle" />
        <a href={`/a/profile/${username}`}>
          {username.charAt(0).toUpperCase() + username.substr(1)}
        </a>
        { read_cookie('loggedInUsername') !== username ?
                (
                  <span className="float-right text-muted">
                    <FollowButton username={username} />
                  </span>
                ): (false)}
      </li>
    );
  }
}

LikesViewComponent.propTypes = {
  reaction: PropTypes.object.isRequired
};

export default LikesViewComponent;
