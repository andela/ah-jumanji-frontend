import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import Editor, {mapDispatchToProps} from './_articleedit';
import {
  UPDATING_CURRENT
} from '../../actions/actionTypes';

Enzyme.configure({ adapter: new Adapter() });

describe('EditPage', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Editor debug />);
    expect(component).toMatchSnapshot();
  });
});

it('simulate components interactions', () => {
    const wrapper = shallow(<Editor />);
    expect(wrapper.find('publish-div').length).toEqual(0);
});

const Item = require('./_articleedit.js').default;

it('FroalaEditor is present', () => {
  const component = shallow(<Item />);
  expect(component.exists()).toBe(true);
});

describe('updateRealtime BE CALLED', () => {
  const dispatch = jest.fn();
  let expectedData = null;

  it('should return resent data update', () => {
    //#1. updateRealtime
    let article_data="this is the body";
    expectedData = {"payload": {
      "read_article": {
        "body": "this is the body"
      },"updating": true},
      "type": UPDATING_CURRENT};
      mapDispatchToProps(dispatch).updateRealtime(article_data);
      expect(dispatch.mock.calls[0][0]).toEqual(expectedData);
  });

  it('should return deleted data response', () => {
    //#2. deleteArticle
    let article_data="this is the delete body";

    const deleteArticle = jest.fn();
    let result = Object.defineProperty(deleteArticle, 'deleteArticle', {value: jest.fn()});
      mapDispatchToProps(dispatch).deleteArticle(article_data);
      expect(result).not.toHaveBeenCalled(); // I NEED HELP HERE
  });


  it('should return update data response', () => {
    //#3. updateArticle
    let article_data="this is the delete body";

    const updateArticle = jest.fn();
    let result = Object.defineProperty(updateArticle, 'updateRealtime', {value: jest.fn()});
      mapDispatchToProps(dispatch).updateRealtime(article_data);
      expect(result).not.toHaveBeenCalled(); // I NEED HELP HERE
  });


  it('should return update data response', () => {
    //#1. getArticles
    let slug="this is the delete body";

    const getArticles = jest.fn();
    let result = Object.defineProperty(getArticles, 'getArticles', {value: jest.fn()});
      mapDispatchToProps(dispatch).getArticles(slug);
      expect(result).not.toHaveBeenCalled(); // I NEED HELP HERE
  });

});
