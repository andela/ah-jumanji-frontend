import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import {mount} from 'enzyme/build';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as post_actions from './_post_actions';
import {POSTING_ARTICLE, POSTED_ARTICLE, ERROR_POSTING_ARTICLE} from '../actionTypes';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

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
        "payload": "Cannot post",
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

'use strict';

jest.useFakeTimers();

it('waits 1 second before redirecting', () => {
    post_actions.redirectUrl('/home/is/here');

  expect(setTimeout).toHaveBeenCalledTimes(1);
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1200);
});

it('test navigation happened', () => {
    window.location.replace = jest.fn();
    post_actions.openWindow("http://some-url"); //The action
    expect(window.location.replace).toHaveBeenCalled();
    expect(window.location.replace).toBeCalledWith('http://some-url');
});

  describe('Toast function tests', () => {

    jest.useFakeTimers();

    it('toast.isActive should return false until the container is mounted', () => {
      const isActive = toast.isActive();
      expect(isActive).toBe(false);
    });

    it('Should return all toast called true ', () => {
      mount(<ToastContainer />);
      const sc = post_actions.toastNotification("success", "Hello", 800);
      const wr = post_actions.toastNotification("warn", "Hello", 800);
      const er = post_actions.toastNotification("error", "Hello", 800);
      const ot = post_actions.toastNotification("other", "Hello", 800);

      jest.runAllTimers();
      expect(toast.isActive(sc)).toBe(true);
      expect(toast.isActive(wr)).toBe(true);
      expect(toast.isActive(er)).toBe(true);
      expect(toast.isActive(ot)).toBe(true);
    });
  });
