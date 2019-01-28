import {
    POSTING_ARTICLE,
    DELETING_ARTICLE,
    POSTED_ARTICLE,
    GOT_ARTICLE,
    ERROR_GETTING_ARTICLE,
    UPDATING_ARTICLE,
    UPDATED_ARTICLE,
    UPDATING_CURRENT,
    UPDATED_ERROR,
    ERROR_DELETING_ARTICLE,
    DELETED_ARTICLE
  } from '../actions/actionTypes';


export default function articlesReducer(state = {}, action) {
    switch (action.type) {
        case POSTING_ARTICLE:
            return Object.assign({}, state, action.payload);
        case POSTED_ARTICLE:
            return Object.assign({}, state, action.payload);
        case GOT_ARTICLE:
            return Object.assign({}, state, action.payload);
        case ERROR_GETTING_ARTICLE:
            return Object.assign({}, state, action.payload);
        case UPDATING_ARTICLE:
            return Object.assign({}, state, action.payload);
        case UPDATED_ARTICLE:
            return Object.assign({}, state, action.payload);
        case UPDATING_CURRENT:
            return Object.assign({}, state, action.payload);
        case UPDATED_ERROR:
            return Object.assign({}, state, action.payload);
        case ERROR_DELETING_ARTICLE:
            return Object.assign({}, state, action.payload);
        case DELETING_ARTICLE:
            return Object.assign({}, state, action.payload);
        case DELETED_ARTICLE:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}