import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';

import * as post_actions from './_post_actions';
import {POSTING_ARTICLE, POSTED_ARTICLE, ERROR_POSTING_ARTICLE} from '../actionTypes';


it('return state data when article is being posted', () => {

    const data = {article : 'posting article'};
    const returnedData = {
        type: POSTING_ARTICLE,
        payload:{
            data,
            posting:true,
            fetching:false
        }
    };

    expect(post_actions.postingArticle(data)).toEqual(returnedData);
  });


it('return state data when article is posted', () => {
    const data = {
        article: 'posted article'
    };
    const returnedData = {
        type: POSTED_ARTICLE,
        payload:{
            data,
            posting: false,
            fetching: false
        }
    };

    expect(post_actions.postedArticle(data)).toEqual(returnedData);
  });


it('return state data when article posting is errored', () => {
    const passed_payload = "Cannot post";
    const returnedData = {
        "payload": "Could not post",
        "type": ERROR_POSTING_ARTICLE
    };
    expect(post_actions.postingError(passed_payload)).toEqual(returnedData);
  });

//Testing async tests
describe("Test for the posting async function", ()=>{
    it("Should return a posted success slug",() => {
        let postData = post_actions.postArticle("<p>This is the article body</p>");
        postData().then(response => {
            expect(response.data.articles.slug).toEqual("string-e678-963376");
            expect(mockStore.getActions()).toEqual(post_actions.postingArticle("This is the article body"));
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
  let getPostsMock = {articles: "this is slug"};
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: getPostsMock,
      });
    });

    const expectedActions = [
        { type: POSTED_ARTICLE, payload:{data: getPostsMock, posting: false, fetching: false }},
        { type: ERROR_POSTING_ARTICLE, payload:"Could not post" },
        ];


    return store.dispatch(post_actions.postArticle("this is slug")).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

