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