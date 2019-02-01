import expect from 'expect';

import * as types from  './CommentRxnActionsTypes';
import * as actions from './CommentRxnActions';


describe('Comment reaction Actions', () => {
    it('should dispatch FETCH_COMMENTS_REACTIONS after successfuly fetching comment reactions', () => {
      // List of comments
      const reactions = [];
        const expectedAction = {
          type: types.FETCH_COMMENTS_REACTIONS,
          payload: reactions
        };
        expect(actions.fetchCommentsReactionsSuccess(reactions)).toEqual(expectedAction);
    });

    it('should dispatch FETCH_COMMENT_REACTIONS_FAILURE on error when fetching comment reactions', () => {
      // List of comments
      const errors = {};
        const expectedAction = {
          type: types.FETCH_COMMENTS_REACTIONS_FAILURE,
          payload: errors
        };
        expect(actions.fetchCommentsReactionsFailure(errors)).toEqual(expectedAction);
    });

    it('should dispatch FETCH_COMMENTS_REACTIONS_FAILURE on error when posting comment reaction fails', () => {
      // List of comments
      const errors = {};

      const expectedAction = {
        type: types.FETCH_COMMENTS_REACTIONS_FAILURE,
        payload: errors
      };
      expect(actions.postCommentReactionFailure(errors)).toEqual(expectedAction);
    });
});
