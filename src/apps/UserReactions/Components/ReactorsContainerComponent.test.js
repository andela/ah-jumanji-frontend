import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";

import ReactorsContainer from "./ReactorsContainerComponent";
import {mountWithStore} from "../../resetPassword/tests/email_reset.test";


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


Enzyme.configure({adapter: new Adapter()});

const fakeReactionType = "dislike";
const fakeReactions = [];

describe('The reactors container', function () {
  let store = mockStore({});
  let component = mountWithStore(<ReactorsContainer reactions={fakeReactions} reactionType={fakeReactionType} />, store);
  it('should render reactors container', function () {
    expect(component.find('.reactors-header')).toBeDefined();
    expect(component.find('.reactors-names')).toBeDefined();
  });
});
