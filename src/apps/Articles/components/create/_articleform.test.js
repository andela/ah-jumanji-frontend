import React from 'react';
import Enzyme, { shallow} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";

import ArticlePageForm, {mapDispatchToProps, mapStateToProps} from './_articleform';

Enzyme.configure({ adapter: new Adapter() });

describe('ArticlePageForm', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<ArticlePageForm debug />);
    expect(component).toMatchSnapshot();
  });
});

it('should return update data response', () => {
  //#1. postArticle
  let article="this is the delete body";
  const dispatch = jest.fn();

  const postArticle = jest.fn();
  let result = Object.defineProperty(postArticle, 'getArticles', {value: jest.fn()});
    mapDispatchToProps(dispatch).postArticle(article);
    expect(result).not.toHaveBeenCalled(); // I NEED HELP HERE
});

describe('Test for mapStateToProps', () => {
  let expectedData = null;

    it('should show previous', () => {
        let myProps = {"job": "programmer"};
        const initialState = {
          Articles: {"articles": {body: "cool"}}
        };

        // Just call the method directly passing in sample data
        expectedData = {"Articles": undefined, "myProps": {"job": "programmer"}};
        expect(mapStateToProps(initialState,myProps)).toEqual(expectedData);
    });
});