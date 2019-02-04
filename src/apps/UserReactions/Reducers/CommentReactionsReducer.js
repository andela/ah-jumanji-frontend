import * as types from '../Actions/CommentRxnActionsTypes';

export const initialState = {
  reactions: [],
  errors: ""
};

const commentsReactionsReducer = (state=initialState, action) => {
  switch (action.type) {
    case types.FETCH_COMMENTS_REACTIONS:
      return Object.assign(
        {},
        state,
        {reactions: action.payload}
      );

    case types.FETCH_COMMENTS_REACTIONS_FAILURE:
      return Object.assign(
        {},
        state,
        {errors: action.payload}
      );

    case types.ADD_COMMENT_REACTION:
      return Object.assign(
        {},
        state,
        {reactions: [...state.reactions, action.payload]}
      );

    case types.UNDO_COMMENT_REACTION:
      return Object.assign(
        {},
        state,
        {reactions: [state.reactions.filter(rxn => rxn.comment !== action.payload)]}
      );

    case types.ADD_COMMENT_REACTION_FAILURE:
      return Object.assign(
        {},
        state,
        {errors: action.payload}
      );

    default:
      return state;
  }
};

export default commentsReactionsReducer;