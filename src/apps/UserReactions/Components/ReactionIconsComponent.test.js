import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";

import ReactionIcons from "./ReactionIconsComponent";
import {mountWithStore} from "../../resetPassword/tests/email_reset.test";


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


Enzyme.configure({adapter: new Adapter()});


describe('The reactors container', function () {
  let store = mockStore({});
  let component = mountWithStore(<ReactionIcons reactionsCount={{likeCount: ["You"], dislikeCount: ["Me"]}} updateReactionType={()=>("")} />, store);
  it('should render reactors container', function () {
    expect(component.find('#like')).toBeDefined();
    expect(component.find('#dislike')).toBeDefined();
  });
});
