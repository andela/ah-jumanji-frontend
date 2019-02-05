import commentListReducer, {initialState} from './CommentReactionsReducer';
import * as types from "../Actions/CommentRxnActionsTypes";


const fakeReaction = {
  comment: 50,
  reaction: -1
};

const fakeReactionToo = {
  comment: 49,
  reaction: 1
};

const fetchCommentReactionsAction = {
  type: types.FETCH_COMMENTS_REACTIONS,
  payload: [fakeReaction, fakeReactionToo]
};

const addCommentReactionAction = {
  type: types.ADD_COMMENT_REACTION,
  payload: {...fakeReaction}

};


describe('Reactions Reducers', () => {
  it('should handle ADD_COMMENT_REACTION by inserting a reaction into state', () => {
    expect(commentListReducer(initialState, addCommentReactionAction)).toEqual({
      ...initialState,
      reactions: [fakeReaction]
    });
  });


  it('should handle FETCH_COMMENT_REACTIONS by inserting all existing comments into state', () => {
    expect(commentListReducer(initialState, fetchCommentReactionsAction)).toEqual({
      ...initialState,
      reactions: [fakeReaction, fakeReactionToo]
    });
  });

  it('should handle FETCH_COMMENTS_REACTIONS_FAILURE', () => {
    const action = {
      type: types.FETCH_COMMENTS_REACTIONS_FAILURE
    };
    expect(commentListReducer({}, action)).toEqual({});
  });

  it('should handle ADD_COMMENT_REACTION_FAILURE', () => {
    const action = {
      type: types.ADD_COMMENT_REACTION_FAILURE
    };
    expect(commentListReducer({}, action)).toEqual({});
  });

});