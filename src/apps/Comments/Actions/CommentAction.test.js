import expect from 'expect';

import * as types from  './CommentActionTypes';
import * as actions from './CommentActions';


describe('Comment Actions', () => {
    it('should dispatch FETCH_COMMENTS after successfuly fetching comments', () => {
      // List of comments
      const comments = [];
        const expectedAction = {
          type: types.FETCH_COMMENTS,
          payload: comments
        };
        expect(actions.fetchCommentsSuccess(comments)).toEqual(expectedAction);
    });

    it('should dispatch FETCH_COMMENTS_FAILURE on error when fetching comments', () => {
      // List of comments
      const errors = {};
        const expectedAction = {
          type: types.FETCH_COMMENTS_FAILURE,
          payload: errors
        };
        expect(actions.fetchCommentsFailure(errors)).toEqual(expectedAction);
    });

    it('should dispatch ADD_COMMENT on successfully posting comment', () => {
      // List of comments
      const comment = {
        "body": "body tu flani",
        "author": {
          "username": "dmithamo",
          "bio": "my bio here"
        }
      };

      const expectedAction = {
        type: types.ADD_COMMENT,
        payload: comment
      };
      expect(actions.addCommentSuccess(comment)).toEqual(expectedAction);
    });

    it('should dispatch ADD_COMMENT_FAILURE on error when posting comment fails', () => {
      // List of comments
      const errors = {};

      const expectedAction = {
        type: types.ADD_COMMENT_FAILURE,
        payload: errors
      };
      expect(actions.addCommentFailure(errors)).toEqual(expectedAction);
    });

    it('should dispatch DELETE_COMMENT on clicking delete', () => {
      // List of comments
      const id = 10;

      const expectedAction = {
        type: types.DELETE_COMMENT,
        payload: id
      };
      expect(actions.deleteCommentSuccess(id)).toEqual(expectedAction);
    });
});
