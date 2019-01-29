import React from 'react';
import Enzyme, { shallow} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";

import ArticlePageForm from './_articleform';

Enzyme.configure({ adapter: new Adapter() });

describe('ArticlePageForm', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<ArticlePageForm debug />);
    expect(component).toMatchSnapshot();
  });
});
