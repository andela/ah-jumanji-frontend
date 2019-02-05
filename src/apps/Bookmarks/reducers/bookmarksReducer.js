import * as types from  '../actions/actionTypes';

export const initialState = {
    bookmark: {bookmarks: {}},
    slug: "",
    bookmarked: false
  };

export default function bookmarksReducer(state = initialState, action){
    switch (action.type) {
        case types.BOOKMARK_SUCCESS:
            return {...state, bookmarks: action.bookmarks};

        case types.BOOKMARK_FAILED:
            return Object.assign({}, state, action.bookmarkError);

        default:
            return state;
    }
}
