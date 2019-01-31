import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { read_cookie } from 'sfcookies';

import Icon from '../../Comments/Components/Reusable/Icon';

import { postCommentReaction } from '../Actions/CommentRxnActions';

const loggedInuser = read_cookie('loggedInUsername');

 class ReactionIcons extends Component {

  constructor(props) {
    super(props);
  }
  //  Click Handler
  onClick = (e) => {
    const { postCommentReaction } = this.props;
    //POST a reaction
    let commentID = e.target.parentElement.parentElement.parentElement.parentElement.id;
    let reaction = e.target.id === "like" ? 1 : -1;

    // Send request
    postCommentReaction(commentID, reaction);
  };
  //  Mouse Enter Handler
  onMouseEnter = (e) => {
    const { updateReactionType } = this.props;
    let reactionsCont = e.target.parentElement.parentElement.parentElement.nextElementSibling;
    reactionsCont.classList.remove("hidden");
    updateReactionType(e.target.id);
    console.log(this.props.reactionsCount.likeCount.includes("dmithamo"))
  };

  //  Mouse Leave Handler
  onMouseLeave = (e) => {
    let reactionsCont = e.target.parentElement.parentElement.parentElement.nextElementSibling;

    // If user moves mouse away from Container, container disapperas. Magic
    reactionsCont.addEventListener("mouseleave", () => {
      reactionsCont.classList.add("hidden");
    });
  };

  render () {
    const { reactionsCount } = this.props;
    const { likeCount, dislikeCount } = reactionsCount;

    return (
      <div className="reaction-icons">
        <div className="icons-div">
          <Icon
            specialStyle={likeCount.includes(loggedInuser) ? "liked" : "unreacted"}
            id="like"
            iconType="far fa-thumbs-up"
            onClick={this.onClick}
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
          />
          <span className="reaction-count">{likeCount.length}</span>
        </div>
        <div className="icons-div">
          <Icon
            specialStyle={dislikeCount.includes(loggedInuser) ? "disliked" : "unreacted"}
            id="dislike"
            iconType="far fa-thumbs-down"
            onClick={this.onClick}
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
          />
          <span className="reaction-count">{dislikeCount.length}</span>
        </div>
      </div>
    );
  }
}

ReactionIcons.propTypes = {
  updateReactionType: PropTypes.func.isRequired,
  reactionsCount: PropTypes.object.isRequired,
  postCommentReaction: PropTypes.func.isRequired
};

export default connect(null, { postCommentReaction })(ReactionIcons);
