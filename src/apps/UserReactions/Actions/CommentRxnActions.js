/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { read_cookie } from 'sfcookies';
import config from '../../../config/config';

import * as types from './CommentRxnActionsTypes';

const { commentReactionsEndpoint } = config.api;

const token = read_cookie("token");
const loggedInuser = read_cookie('loggedInUsername');


export const fetchCommentReactions = () => {
  return (dispatch) => {
    return axios.get(commentReactionsEndpoint, {
      headers: {
        Accept: 'application/json',
        Authorization: `Token ${token}`
      }
    })
      .then(response => {
        dispatch(fetchCommentsReactionsSuccess(response.data.reactions));
      })
      .catch(errors => {
        dispatch(fetchCommentsReactionsFailure(errors));
      });
  };
};

export const postCommentReaction = (commentID, reaction) => {
  let formattedReaction = {
    comment_id: commentID,
    reaction
  };
  return (dispatch) => {
    return axios.post(commentReactionsEndpoint, formattedReaction, {
      headers: {
        Accept: 'application/json',
        Authorization: `Token ${token}`
      }
    })
      .then(response => {
        // Check response to see whether user has undone a previous reaction
        // 201 means a new reaction, 200 means user just undid a reaction
        response.status === 201 ? dispatch(
          postCommentReactionSuccessful(response.data.reaction)) : dispatch(undoAReaction(commentID));
        dispatch(fetchCommentReactions());
      })
      .catch(errors => {
        dispatch(fetchCommentsReactionsFailure(errors));
      });
  };
};


export const fetchCommentsReactionsSuccess = (reactions) => (
  {
    type: types.FETCH_COMMENTS_REACTIONS,
    payload: reactions
  }
);

export const fetchCommentsReactionsFailure = (errors) => (
  {
    type: types.FETCH_COMMENTS_REACTIONS_FAILURE,
    payload: errors
  }
);

export const postCommentReactionSuccessful = (rxn) => (
  // Configure the response to include username (=== current logged in user, saved in cookies).
  // API does not return username on POST /comments/reactions
  {
    type: types.ADD_COMMENT_REACTION,
    payload: {...rxn, user: {username: loggedInuser}}
  }
);

export const undoAReaction = (commentID) => (
  {
    type: types.UNDO_COMMENT_REACTION,
    payload: commentID
  }
);

export const postCommentReactionFailure = (errors) => (
  {
    type: types.FETCH_COMMENTS_REACTIONS_FAILURE,
    payload: errors
  }
);