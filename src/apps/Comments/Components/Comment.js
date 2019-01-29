// Component to house each comment
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { read_cookie } from 'sfcookies';

import EditDeleteBtnsComponent from './EditDeleteBtns';
import AddCommentComponent from './AddComment';
import config from '../../../config/config';

// Bring in ReactionIcons
import ReactionIcons from '../../UserReactions/Components/ReactionsComponent';

class CommentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: props.comment,
    };
  }

  formatTime = (time) => {
    const dateFromStr = new Date(time);
    let longForm = `${dateFromStr}`.split("GMT")[0];
    let splitIt = longForm.split(" ");
    let month = splitIt[1];
    let dayte = splitIt[2];
    let timeFull = splitIt[4];
    let shortForm = `${month} ${dayte} ${timeFull}`;
    return shortForm;
  };

  render() {
    // Extract data from comment object passed to this
    const { comment } = this.state;
    // Extract comment params
    let { id, createdAt, body, author } = comment;
    // Structure the time
    createdAt = this.formatTime(createdAt);
    // Commenter details
    let { username, image } = author;
    // In some cases (bug!!!!), `profile_picture` is used instead of `image`
    // To account for that ...
    if(!image){
      const { profile_photo } = author;
      image = profile_photo;
    }

    const loggedInAs = read_cookie('loggedInUsername');

    return (
      <div>
        <li id={id} className="list-group-item">
          <div className="row">
            {/* Commenter img */}
            <div className="col-md-1 col-sm-2 col-2">
              <img src={image || config.defaultImage} alt="follower avatar" className="followers-avatar message-avatar rounded-circle" />
            </div>

            {/* The comment */}
            <div className="col-md-11 col-sm-10 col-10">

              {/* Commenter username */}
              <div className="message">
                <Link to={`/ah-jumanji/profile/${username}`}>{username.charAt(0).toUpperCase() + username.substr(1)}</Link>

                {/* Commented on */}
                <span className="float-right text-muted">
                  <i className="fas fa-clock" />
                  {` ${createdAt}`}
                </span>

                <br />
                {/* Comment body */}
                <span className="comment-body">
                  {body}
                </span>
              </div>
            </div>
          </div>
          <div className="icons-row">
            <ReactionIcons />
            <span />
            {loggedInAs === username ?
              <EditDeleteBtnsComponent />
              : <span />
            }
          </div>
        </li>
        <AddCommentComponent actionToExecute="edit" specialClass="hidden" />
        <hr />
      </div>
    );
  }
}

CommentComponent.propTypes = {
  comment: PropTypes.object.isRequired,
};

export default CommentComponent;
