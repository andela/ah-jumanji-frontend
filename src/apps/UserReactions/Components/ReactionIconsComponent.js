import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Icon from '../../Comments/Components/Reusable/Icon';

import { postCommentReaction } from '../Actions/CommentRxnActions';

 class ReactionIcons extends Component {

  constructor(props) {
    super(props);
  }
  //  Click Handler
  onClick = (e) => {
    const { postCommentReaction } = this.props;
    //POST a reaction
    let commentID = e.target.parentElement.parentElement.parentElement.id;
    let reaction = e.target.id === "like" ? 1 : -1;

    // Send request
    postCommentReaction(commentID, reaction);
  };
  //  Mouse Enter Handler
  onMouseEnter = (e) => {
    const { updateReactionType } = this.props;
    let reactionsCont = e.target.parentElement.parentElement.nextElementSibling;
    reactionsCont.classList.remove("hidden");
    updateReactionType(e.target.id);
  };

  //  Mouse Leave Handler
  onMouseLeave = (e) => {
    let reactionsCont = e.target.parentElement.parentElement.nextElementSibling;

    // If user moves mouse away from Container, container disapperas. Magic
    reactionsCont.addEventListener("mouseleave", () => {
      reactionsCont.classList.add("hidden");
    });
  };

  render () {

    return (
      <div className="reaction-icons">
        <Icon
          id="like"
          iconType="far fa-thumbs-up"
          onClick={this.onClick}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
        />
        <Icon
          id="dislike"
          iconType="far fa-thumbs-down"
          onClick={this.onClick}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
        />
      </div>
    );
  }
}

ReactionIcons.propTypes = {
  updateReactionType: PropTypes.func.isRequired,
  postCommentReaction: PropTypes.func.isRequired
};

export default connect(null, { postCommentReaction })(ReactionIcons);