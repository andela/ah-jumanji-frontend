import commentListReducer, {initialState} from './CommentListReducer';
import * as types from "../Actions/CommentActionTypes";


const fakeComment = {
  "id": 100,
  "author": {
    "username": "dmithamo",
    "image": "",
  },
  "body": "fake body"
};

const fakeCommentEdited = {
  "id": 100,
  "author": {
    "username": "dmithamo",
    "image": "",
  },
  "body": "nolonger a fake body"
};

const fakeCommentToo = {
  "id": 1000,
  "author": {
    "username": "me",
    "image": "",
  },
  "body": "whats in aname?"
};

const fetchCommentsAction = {
  type: types.FETCH_COMMENTS,
  payload: [fakeComment, fakeCommentToo]
};

const addCommentAction = {
  type: types.ADD_COMMENT,
  payload: fakeComment

};

const deleteCommentAction = {
  type: types.DELETE_COMMENT,
  payload: fakeComment.id

};

const editCommentAction = {
  type: types.EDIT_COMMENT,
  payload: fakeCommentEdited

};

describe('CommentList Reducers', () => {
  it('should handle ADD_COMMENT by inserting a comment into state', () => {
    expect(commentListReducer(initialState, addCommentAction)).toEqual({
      ...initialState,
      comments: [fakeComment]
    });
  });

  it('should handle DELETE_COMMENT by removing a comment from state', () => {
    expect(commentListReducer(initialState, deleteCommentAction)).toEqual({
      ...initialState,
      comments: []
    });
  });

  it('should handle EDIT_COMMENT by modifying a comment in state', () => {
    // Add comment first
    let state = commentListReducer(initialState, addCommentAction);
    expect(commentListReducer(state, editCommentAction)).toEqual({
      ...state,
      comments: [fakeCommentEdited]
    });
  });

  it('should handle FETCH_COMMENTS by inserting all existing comments into state', () => {
    expect(commentListReducer(initialState, fetchCommentsAction)).toEqual({
      ...initialState,
      comments: [fakeComment, fakeCommentToo]
    });
  });

  it('should handle fetch comments failed', () => {
    const action = {
      type: types.FETCH_COMMENTS_FAILURE
    };

    expect(commentListReducer({}, action)).toEqual({});
  });

  it('should handle add comments failed', () => {
    const action = {
      type: types.ADD_COMMENT_FAILURE
    };

    expect(commentListReducer({}, action)).toEqual({});
  });

  it('should handle edit comments failed', () => {
    const action = {
      type: types.EDIT_COMMENT_FAILURE
    };

    expect(commentListReducer({}, action)).toEqual({});
  });

});