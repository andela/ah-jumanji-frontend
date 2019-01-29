import * as types from  '../actions/actionTypes';


export default function dashboardReducer(state = {}, action){
    switch (action.type) {
        case types.FETCH_SUCCESS:
            return {...state, articles: action.articlesData};

        case types.FETCH_FAILED:
            return Object.assign({}, state, action.error);

        default:
            return state;
    }
}
