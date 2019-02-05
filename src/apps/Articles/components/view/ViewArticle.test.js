import React from 'react';
import Enzyme, {shallow} from 'enzyme/build';
import Adapter from "enzyme-adapter-react-16/build";

import ArticlePage from './ViewArticle';


Enzyme.configure({ adapter: new Adapter() });

describe('Article Page', () => {
  let articlePage;
  beforeEach(() => {
    articlePage = shallow(<ArticlePage />);
  });

  it('renders correctly: ', () => expect(articlePage.exists()).toEqual(true));
  it('renders props: ', () => {
    const props = shallow(<ArticlePage articles="Article" />);
    expect(props.instance().props.articles).toBe("Article");
  });
});