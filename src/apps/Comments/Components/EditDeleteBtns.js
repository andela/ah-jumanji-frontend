import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Icon from './Reusable/Icon';
import { deleteComment, editComment } from '../Actions/CommentActions';


class EditDeleteBtnsComponent extends Component {
  onClick = (e) => {
    let iconID = e.target.id;
    let commentLI = e.target.parentElement.parentElement.parentElement;
    let commentID = commentLI.id;

    // Use local storage to save these two for reuse
    localStorage.setItem("clickedCommentID", commentID);
    localStorage.setItem("clickedCommentLI", commentLI);

    if(iconID === 'delete-icon'){
      // Delete comment
      const { deleteComment } = this.props;
      deleteComment(commentID);
    }
    else if(iconID === 'edit-icon'){
      // Show editing modal autofilled with comment text
      const editingModal = commentLI.nextElementSibling;
      const commentText = commentLI.querySelector("span.comment-body").innerHTML;

      // `Cache` this value. Needed for if user cancels editing process
      localStorage.setItem("cachedComment", commentText);

      editingModal.classList.remove("hidden");

      // Modal input tag
      const modalInputTag = editingModal.querySelector("input");
      modalInputTag.value = commentText;
      modalInputTag.focus();
    }
  }
  render() {
    return (
      <div id="e-d-icons" className="edit-delete-icons">
        <Icon
          id="edit-icon"
          iconType="fas fa-edit"
          onClick={this.onClick}
        />
        <Icon
          id="delete-icon"
          iconType="fas fa-trash-alt"
          onClick={this.onClick}
        />
      </div>
    );
  }
}

EditDeleteBtnsComponent.propTypes = {
  deleteComment: PropTypes.func.isRequired,
};

export default connect(null, { deleteComment, editComment })(EditDeleteBtnsComponent);