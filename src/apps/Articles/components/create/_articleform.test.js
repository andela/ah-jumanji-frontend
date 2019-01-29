import React from 'react';
import Enzyme, { shallow} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";

import ArticlePageForm,{mapStateToProps} from './_articleform';

Enzyme.configure({ adapter: new Adapter() });

describe('ArticlePageForm', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<ArticlePageForm debug />);
    expect(component).toMatchSnapshot();
  });
});


describe('Create article Props test', () => {
  let expectedData = null;

    it('should show previous', () => {
        let myProps = {"slug": "this is le slug"};
        const initialState = {
          articles: {
            author: "Granson",
            body: "This is a test article"}
        };
        const returnState = {
            author: "Granson",
            body: "This is a test article"
        };

        // Just call the method directly passing in sample data
        expectedData = {"myProps": myProps, "Articles": returnState};
        expect(mapStateToProps(initialState,myProps)).toEqual(expectedData);
    });
});