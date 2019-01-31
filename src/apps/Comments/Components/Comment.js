// Component to house each comment
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { read_cookie } from 'sfcookies';

import EditDeleteBtnsComponent from './EditDeleteBtns';
import AddCommentComponent from './AddComment';
import config from '../../../config/config';

import ReactorsContainer from '../../UserReactions/Components/ReactorsContainerComponent';
import ReactionIcons from '../../UserReactions/Components/ReactionIconsComponent';

const { viewProfile } = config.api;
class CommentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reactionType: "dislike"
    };

    this.updateReactionType = this.updateReactionType.bind(this);

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

  // Change state on mouse over ReactionIcons
  updateReactionType (reactionType) {
    this.setState({reactionType: reactionType});
  }

  render() {
    // Destructure props and state for necessary data
    const { reactionType } = this.state;
    const { comment, reactions } = this.props;

    const reactionsCount = {
      likers: reactions.filter(rxn => rxn.reaction === 1),
      dislikers: reactions.filter(rxn => rxn.reaction === -1)
    };

    // Extract data from comment object passed to this
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
                <a href={`${viewProfile}/${username}`}>{username.charAt(0).toUpperCase() + username.substr(1)}</a>

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
            <ReactionIcons reactionsCount={{likeCount: reactionsCount.likers.map(liker => liker.user.username), dislikeCount: reactionsCount.dislikers.map(disliker => disliker.user.username)}} updateReactionType={this.updateReactionType} />
            <p />
            {loggedInAs === username ?
              <EditDeleteBtnsComponent />
              : <span />
            }
          </div>
          <ReactorsContainer reactionType={reactionType} reactions={reactions} />
        </li>
        <AddCommentComponent actionToExecute="edit" specialClass="hidden" />
        <hr />
      </div>
    );
  }
}

CommentComponent.propTypes = {
  comment: PropTypes.object.isRequired,
  reactions: PropTypes.array.isRequired,
};

export default CommentComponent;
