/* eslint-disable jsx-a11y/no-autofocus */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import InfoSubscript from './Reusable/InfoSubscript';

import ValidationSubscript from '../../common/components/validationSubscript';

import { addComment, editComment } from '../Actions/CommentActions';

// Need to be globally available
let elem = "";
let infoSub = "";
let errorSubscript = "";
let commentID;
// eslint-disable-next-line no-var
let commentLIText = "";

class AddCommentComponent extends Component {
  onCommentInput = (e) => {
    // Collect input, call appropriate action
    const { actionToExecute } = this.props;
    this.setState({comment: e.target.value});
    elem = e.target;
    errorSubscript = elem.parentElement.parentElement.parentElement.querySelector("p");
    // Show subscript
    infoSub = elem.parentElement.parentElement.parentElement.querySelector("p.text-info");
    infoSub.classList.remove("hidden");

    // Call apropriate action
    if(actionToExecute === "edit") {
      // Update comment as user edits
      // Updating ...
      commentID = localStorage.clickedCommentID;
      commentLIText = document.getElementById(`${commentID}`).querySelector("span.comment-body");
      commentLIText.innerHTML = e.target.value;
    }
  }

  onKeyDown = () => {
    if(event.keyCode === 13) {
      event.preventDefault();
      this.onCommentSubmit();
      return false;
    }
    else if(event.keyCode === 27) {
      const { actionToExecute } = this.props;
      event.preventDefault();

      if(actionToExecute === "edit"){
        // Rehide the edit modal, if its the one that appears on demand
        elem.parentElement.parentElement.parentElement.classList.add('hidden');
        // Reset comment to cached value
        commentLIText.innerHTML = localStorage.cachedComment;
      }

      // Reset input form
      this.resetInputForm();
      document.activeElement.blur();
    }
  }

  onCommentSubmit = () => {
    // Validate input
    if(elem.value !== '') {
      const { addComment, actionToExecute } = this.props;
      const { comment } = this.state;
      // Format comment as API expects
      const newComment = {
        "comment": {
          "body": comment,
        }
      };

      actionToExecute === "addNew" ? addComment(newComment) : this.editAComment(newComment);
    }
    else {
      elem.classList.add("highlight-error-input");
      errorSubscript.innerHTML = "This field may not be blank";
      errorSubscript.classList.remove("hidden");
      errorSubscript.classList.add("subscript-error");
    }
    // Reset form
    elem.value = '';
    // onChangelistener
    elem.addEventListener('focus', () => {
      // undo all the things!
      this.resetInputForm();
    });
  }

  editAComment = (comment) => {
    const { editComment } = this.props;
    editComment(commentID, comment);
    // Rehide the edit modal
    elem.parentElement.parentElement.parentElement.classList.add('hidden');
  }

  resetInputForm = () => {
    // Reset all the things!
    const { actionToExecute } = this.props;
    actionToExecute === "addNew" ? elem.value = "" : false;
    elem.classList.remove("highlight-error-input");
    infoSub.classList.add("hidden");
    errorSubscript.classList.add("hidden");
    errorSubscript.classList.remove("subscript-error");

    // Remove focus from input form
    document.activeElement === elem ? false : elem.blur();
  };

  render() {
    const { specialClass } = this.props;
    return (
      <li className={`list-group-item ${specialClass}`}>
        <form
          className=""
          action=""
          method="post">
          <div className="input-group mb-3">
            <input
              type="text"
              name="comment"
              className="form-control"
              aria-label="Search Content"
              aria-describedby="basic-addon2"
              placeholder="Enter comment..."
              autoComplete="off"
              onChange={this.onCommentInput}
              onFocus={this.onCommentInput}
              onKeyDown={this.onKeyDown}
            />
            <div className="input-group-append">
              <button
                onClick={this.onCommentSubmit}
                className="btn btn-outline-info"
                type="button">
                <i className="fas fa-comment-alt" />
                Submit
              </button>
            </div>
          </div>
        </form>
        <ValidationSubscript />
        <InfoSubscript extraClasses="hidden text-info-custom" text="Press the Escape key to cancel" />
      </li>
    );
  }
}

AddCommentComponent.propTypes = {
  addComment: PropTypes.func.isRequired,
  editComment: PropTypes.func.isRequired,
  specialClass: PropTypes.string.isRequired,
  actionToExecute: PropTypes.string.isRequired,
};

export default connect(null, { addComment, editComment })(AddCommentComponent);