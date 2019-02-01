import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CommentsContainer from "./CommentsContainer";

Enzyme.configure({adapter: new Adapter()});

const fakeComment = {
  "id": 100,
  "author": {
    "username": "dmithamo",
    "image": "",
  },
  "body": "fake body"
};

const fakeCommentToo = {
  "id": 1000,
  "author": {
    "username": "wewe",
    "image": "",
  },
  "body": "Thats what I said"
};

const fakeCommentThree = {
  "id": 10000,
  "author": {
    "username": "mr storys",
    "image": "",
  },
  "body": "One more story"
};

const fakeReacton = {
  comment: 9,
  reaction: 1,
  user: {
    username: "mithamo"
  }
};

const commentList = {"comments": [fakeComment, fakeCommentToo, fakeCommentThree]};

describe('<CommentsContainer />', () => {
  it('render all expected pieces', () => {
    const component = shallow(<CommentsContainer reactions={[fakeReacton]} comments={commentList} />);
    expect(component).toMatchSnapshot();
  });
});
