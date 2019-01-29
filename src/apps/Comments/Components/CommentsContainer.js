// Container for all comments. Will be imported into Articles app

import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import CommentsNav from './CommentsNav';
import Comment from './Comment';
import InfoSubscript from './Reusable/InfoSubscript';
import AddCommentComponent from './AddComment';
import {fetchComments} from '../Actions/CommentActions';
import LikesViewContainer from "../../Like/containers/LikesViewContainer";

import { fetchCommentReactions } from '../../UserReactions/Actions/CommentRxnActions';


class CommentsContainer extends Component {
  componentWillMount() {
    const {fetchComments, fetchCommentReactions} = this.props;
    fetchCommentReactions();
    setTimeout(() => {
      fetchComments();
    }, 1000);
  }

  render() {
    const {comments, likeCount, reactions} = this.props;
    return (
      <div>
        <CommentsNav numberOfComments={comments.length} numberOfLikes={likeCount} />
        <div className="tab-content" id="myTabContent">
          <div className="tab-pane fade show active" id="comments" role="tabpanel" aria-labelledby="tab">
            <div className="col-md-12">
              <ul id="comments-list" className="list-group list-group-flush">
                {/* Render list of comments. Or message if no comments */}
                {
                  comments.length ? comments.map(comm => (
                    <Comment
                      key={comm.id}
                      comment={comm}
                      reactions={reactions.filter(rxn => rxn.comment === comm.id)}
                    />
                  )) : <InfoSubscript extraClasses="hidden" text="No comments on this one. Yet." />
                }
                <AddCommentComponent actionToExecute="addNew" specialClass="unnecessary" />
              </ul>
            </div>
          </div>
          <LikesViewContainer />
        </div>
      </div>
    );
  }
}

CommentsContainer.propTypes = {
  comments: PropTypes.array.isRequired,
  fetchComments: PropTypes.func.isRequired,
  fetchCommentReactions: PropTypes.func.isRequired,
  likeCount: PropTypes.number.isRequired,
  reactions: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  comments: state.commentListReducer.comments,
  likeCount: state.LikeReducer.likeCount,
  reactions: state.commentsReactionsReducer.reactions
});

export default connect(
  mapStateToProps, {fetchComments, fetchCommentReactions})(CommentsContainer);
