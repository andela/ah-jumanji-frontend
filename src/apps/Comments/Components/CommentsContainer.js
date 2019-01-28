// Container for all comments. Will be imported into Articles app

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CommentsNav from './CommentsNav';
import Comment from './Comment';
import InfoSubscript from './Reusable/InfoSubscript';
import AddCommentComponent from './AddComment';
import { fetchComments } from '../Actions/CommentActions';


class CommentsContainer extends Component {
  componentDidMount() {
    const { fetchComments } = this.props;
    fetchComments();
  }

  render () {
    let { comments } = this.props;
    return (
      <div>
        <CommentsNav numberOfComments={comments.length} numberOfLikes={10} />
        <div className="tab-pane fade show active" id="comments" role="tabpanel" aria-labelledby="tab">
          <div className="col-md-12">
            <ul id="comments-list" className="list-group list-group-flush">
              {/* Render list of comments. Or message if no comments */}
              {
                comments.length ? comments.map(comm => (
                  <Comment key={comm.id} comment={comm} />
                )) : <InfoSubscript extraClasses="hidden" text="No comments on this one. Yet." />
              }
              <AddCommentComponent actionToExecute="addNew" specialClass="unnecessary" />
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

CommentsContainer.propTypes = {
  comments: PropTypes.array.isRequired,
  fetchComments: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  comments: state.commentListReducer.comments
});

export default connect(
  mapStateToProps, {fetchComments})(CommentsContainer);
