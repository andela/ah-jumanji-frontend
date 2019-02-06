import React from 'react';
import Enzyme, {shallow} from 'enzyme/build';
import Adapter from "enzyme-adapter-react-16/build";

import ViewPage from './ViewArticle';


Enzyme.configure({ adapter: new Adapter() });

describe('ViewPage article page', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<ViewPage debug match={{params: {slug: 'Yes-is-me'}}} />);
    expect(component).toMatchSnapshot();
  });

});