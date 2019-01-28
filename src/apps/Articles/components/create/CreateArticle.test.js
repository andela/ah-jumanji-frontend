import React from 'react';
import Enzyme, {shallow} from 'enzyme/build';
import Adapter from "enzyme-adapter-react-16/build";

import ArticlePage from './CreateArticle';
import ArticlePageForm from './_articleform';


Enzyme.configure({ adapter: new Adapter() });

describe('ArticlePageForm', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<ArticlePageForm debug />);

    expect(component).toMatchSnapshot();
  });
});

describe('Create article page', () => {

  it('should render correctly in "debug" mode', () => {
    const component = shallow(<ArticlePage debug />);
    expect(component).toMatchSnapshot();
  });

});
