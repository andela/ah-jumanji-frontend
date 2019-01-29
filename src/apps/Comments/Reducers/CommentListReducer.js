/* eslint-disable no-case-declarations */
// Reducer for list of comments from API
import * as types from '../Actions/CommentActionTypes';

export const initialState = {
  comments: [],
};

const commentListReducer = (state=initialState, action) => {
  switch (action.type) {
    case types.FETCH_COMMENTS:
      return Object.assign(
        {},
        state,
        {comments: action.payload}
      );

    case types.FETCH_COMMENTS_FAILURE:
      return {
        ...state,
        errors: action.payload
    };

    case types.ADD_COMMENT:
      return Object.assign(
        {},
        {comments: [...state.comments, action.payload]}
      );

    case types.ADD_COMMENT_FAILURE:
      return {
      errors: action.payload
    };

    case types.DELETE_COMMENT:
      let filteredComms = state.comments.filter(comm => comm.id !== +action.payload);
      return Object.assign(
        {},
        state,
        {comments: filteredComms}
      );

    case types.EDIT_COMMENT:
      let updatedComments = state.comments.map(
        comm => (comm.id !== +action.payload.id ? comm : action.payload));
      return Object.assign(
        {},
        state,
        {comments: [...updatedComments]}
    );

    case types.EDIT_COMMENT_FAILURE:
      return {
        errors: action.payload
      };

    default:
      return state;
  }
};

export default commentListReducer;