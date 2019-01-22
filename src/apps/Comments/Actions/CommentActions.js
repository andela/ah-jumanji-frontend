/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { read_cookie } from 'sfcookies';

import * as types from './CommentActionTypes';

import config from '../../../config/config';

const { articlesEndpoint } = config.api;

// The following is ONLY temporarily hardcoded.
// Ultimately, value to be fetched from localStorage after login
const token = read_cookie('token');

// Article slug extracted from page url
const articleSlug = `${location.pathname.split("/")[3]}`;
// Construct path to article's comments
const commentsPerArticle = `${articlesEndpoint}/${articleSlug}/comments`;

export const fetchComments = () => {
  return (dispatch) => {
    return axios.get(commentsPerArticle, {
      headers: {
        Accept: 'application/json',
        Authorization: `Token ${token}`
      }
    })
    .then (response => {
      dispatch(fetchCommentsSuccess(response.data.comment));
    })
    .catch(err => {
      dispatch(fetchCommentsFailure(err));
    });
  };
};

export const fetchCommentsSuccess = (comments) => (
  {
    type: types.FETCH_COMMENTS,
    payload: comments
  }
);

export const fetchCommentsFailure = (errors) => (
  {
    type: types.FETCH_COMMENTS_FAILURE,
    payload: errors
  }
);

export const addComment = (comment) => {
  return (dispatch) => {
    return axios.post(commentsPerArticle, comment, {
      headers: {
        Accept: 'application/json',
        Authorization: `Token ${token}`
      }
    })
      .then(response => {
        dispatch(addCommentSuccess(response.data.comment));
      })
      .catch(err => {
        dispatch(addCommentFailure(err.reponse.data));
      });
  };
};

export const addCommentSuccess = (comment) => (
  {
    type: types.ADD_COMMENT,
    payload: comment
  }
);

export const addCommentFailure = (errors) => (
  {
    type: types.ADD_COMMENT_FAILURE,
    payload: errors
  }
);


export const deleteComment = (id) => {
  return (dispatch) => {
    return axios.delete(`${commentsPerArticle}/${id}`, {
      headers: {
        Accept: 'application/json',
        Authorization: `Token ${token}`
      }
    })
      /* eslint-disable no-unused-vars */
      .then(response => {
        dispatch(deleteCommentSuccess(id));
      })
      .catch(err => {
        dispatch(deleteCommentFailure(err));
      });
  };
};


export const deleteCommentSuccess = (id) => (
  {
    type: types.DELETE_COMMENT,
    payload: id
  }
);

export const deleteCommentFailure = (errors) => (
  {
    type: types.DELETE_COMMENT_FAILURE,
    payload: errors
  }
);

export const editComment = (id, edittedComment) => {
  return (dispatch) => {
    return axios.put(`${commentsPerArticle}/${id}`, edittedComment, {
      headers: {
        Accept: 'application/json',
        Authorization: `Token ${token}`
      }
    })
      .then(response => {
        dispatch(editCommentSuccess(response.data.comment));
      })
      .catch(err => {
        dispatch(editCommentFailure(err));
      });
  };
};

export const editCommentSuccess = (updatedComment) => (
  {
    type: types.EDIT_COMMENT,
    payload: updatedComment
  }
);

export const editCommentFailure = (errors) => (
  {
    type: types.EDIT_COMMENT_FAILURE,
    payload: errors
  }
);