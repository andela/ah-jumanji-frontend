import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import config from "../../../config/config";
import FollowButton from '../../following/components/FollowButton';

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
        <Link to={`/ah-jumanji/profile/${username}`}>
          {username.charAt(0).toUpperCase() + username.substr(1)}
        </Link>
        <span className="float-right text-muted">
          <FollowButton username={username} />
        </span>
      </li>
    );
  }
}

LikesViewComponent.propTypes = {
  reaction: PropTypes.object.isRequired
};

export default LikesViewComponent;
