import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';

import * as update_actions from './_update_actions';
import {
  UPDATING_ARTICLE,
  UPDATED_ARTICLE,
  UPDATED_ERROR,
  UPDATING_CURRENT
} from '../actionTypes';


it('return state data when article is being updated', () => {

  const data = {
    article: 'updating article'
  };
  const returnedData = {
    type: UPDATING_ARTICLE,
    payload: {
      data,
      updating: true,
      fetching: false
    }
  };

  expect(update_actions.updatingArticle(data)).toEqual(returnedData);
});


it('return state data when article is posted', () => {
  const data = {
    article: 'updated article'
  };
  const returnedData = {
    type: UPDATED_ARTICLE,
    payload: {
      data,
      updating: false,
      fetching: false
    }
  };

  expect(update_actions.updatedArticle(data)).toEqual(returnedData);
});


it('return state data when article updating is errored', () => {
  const passed_payload = "Could not update";
  const returnedData = {
    "payload": "Could not update",
    "type": UPDATED_ERROR
  };
  expect(update_actions.updateError(passed_payload)).toEqual(returnedData);
});


it('return state data when article updating is continuous', () => {
  const new_article = "This is an article";
  const returnedData = {
    payload: {
      read_article: {
        body: new_article
      },
      updating: true
    },
    "type": UPDATING_CURRENT
  };

  expect(update_actions.updateRealtime(new_article)).toEqual(returnedData);
});

//Testing async tests
describe("Test for the updating async function", ()=>{
  it("Should return an update success slug",() => {
      let postData = update_actions.updateArticle("<p>This is the article body</p>");
      postData().then(response => {
          expect(response.data.articles.slug).toEqual("string-e678-963376");
      });
  });

});


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('getDelete actions', () => {

  let  store = mockStore({});
  beforeEach(function () {
    moxios.install();
    store = mockStore({ posts: {} });
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('creates GET_POSTS_SUCCESS after successfuly fetching postse', () => {
  let getPostsMock = {articles: "this is article data"};
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: getPostsMock,
      });
    });

    const expectedActions = [
        //{ type: UPDATING_ARTICLE, payload:{data: getPostsMock, updating:true, fetching: false }},
        { type: UPDATED_ARTICLE, payload:{data: getPostsMock, updating:false, fetching: false }},
        { type: UPDATED_ERROR, payload:"Could not update" },
        ];


    return store.dispatch(update_actions.updateArticle("<p>This is the body</p><p>I love body!</p>","this is slug")).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

