import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';

import * as get_actions from './_get_actions';
import {GOT_ARTICLE, ERROR_GETTING_ARTICLE} from '../actionTypes';

it('return state data when article is fetched', () => {
    const passed_payload = {
        article: 'fetched article'
    };
    const returnedData = {
        "payload": {
            "read_article": passed_payload,
            "posting": false,
            "fetching": false
            },
        "type": GOT_ARTICLE};

    expect(get_actions.gotArticle(passed_payload)).toEqual(returnedData);
  });


it('return state data when article fetching is errored', () => {
    const passed_payload = "Could not get that article";
    const returnedData = {
        "payload": { message: "Could not get that article" },
        "type": ERROR_GETTING_ARTICLE
    };
    expect(get_actions.getError(passed_payload)).toEqual(returnedData);
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

  it('Dispatch error on axios error', () => {
  let getPostsMock = {articles: "this is slug"}; //No user defined
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: getPostsMock,
      });
    });

    const expectedActions = [
        { type: ERROR_GETTING_ARTICLE, payload:{ message: "Could not get that article" }},
        ];


    return store.dispatch(get_actions.getArticles("this is slug")).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });


  it('creates GET_POSTS_SUCCESS after successfuly fetching postse', () => {
    let getPostsMock = {articles: {
          body:"this is slug",
          author:{
            user :"Granson"
          }
        }
      };
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: getPostsMock,
        });
      });

      const expectedActions = [
          { type: GOT_ARTICLE, payload:{
            read_article: getPostsMock.articles,
            posting: false,
            fetching: false
        }},
      ];

      return store.dispatch(get_actions.getArticles("this is slug")).then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
});
