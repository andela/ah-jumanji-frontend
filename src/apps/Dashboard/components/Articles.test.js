import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import Articles from'./Articles';


Enzyme.configure({ adapter: new Adapter() });

describe('Articles', () => {
  it('should render correctly', () => {
    const component = shallow(<Articles actions={{type: "Call-to-action"}} articles={{article:"this is article"}} />);

    expect(component).toMatchSnapshot();
  });
});