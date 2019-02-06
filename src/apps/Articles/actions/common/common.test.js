import React from 'react';
import {mount} from 'enzyme';
import { toast, ToastContainer } from 'react-toastify';
import * as commonActions from './common';

'use strict';

jest.useFakeTimers();

test('waits 1 second before ending the game', () => {

  commonActions.redirectUrl('/the-url');

  expect(setTimeout).toHaveBeenCalledTimes(1);
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
});


test('test window open happened', () => {
    window.location.replace = jest.fn();
    commonActions.openWindow("http://some-url"); //The action
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
     const sc = commonActions.toastNotification("success", "Hello", 800);
     const wr = commonActions.toastNotification("warn", "Hello", 800);
     const er = commonActions.toastNotification("error", "Hello", 800);
     const ot = commonActions.toastNotification("other", "Hello", 800);

      jest.runAllTimers();
     expect(toast.isActive(sc)).toBe(true);
     expect(toast.isActive(wr)).toBe(true);
     expect(toast.isActive(er)).toBe(true);
     expect(toast.isActive(ot)).toBe(true);
   });
});

describe("pressed button", ()=>{

  it("calls on other", ()=>{
    expect(commonActions.onButtonPressed("else", "This is delete", "le slug")).toEqual("nothing");
  });

  const updated = (body, slug) => {
     return "Body : " + body + " and slug " + slug;
  };

  const deleted = (body, slug) => {
    return "Body : " + body + " and slug " + slug;
  };

  let props = {updateArticle: updated, deleteArticle: deleted};

  it("calls on update", ()=>{
    expect(commonActions.onButtonPressed("update", "This is update", "le slug", props)).toEqual("update");
  });

  it("calls on delete", ()=>{
    expect(commonActions.onButtonPressed("delete", "This is delete", "le slug", props)).toEqual("delete");
  });
});

describe("test read time", ()=>{
  it("Returns time taken to read an article", ()=>{
    expect(commonActions.readTime(60)).toEqual("1 min");
    expect(commonActions.readTime(3600)).toEqual("1 hr plus");
    expect(commonActions.readTime(30)).toEqual("1 sec");
  });
});

describe("Date of article writing", ()=>{
  it("Returns date of article", ()=>{
    expect(commonActions.articleTime('2019-02-05T14:36:18.282190Z')).toEqual("Feb.  5 2019");
  });
});
