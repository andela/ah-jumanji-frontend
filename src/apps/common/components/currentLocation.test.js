import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import ShowTheLocation from'./currentLocation';


Enzyme.configure({ adapter: new Adapter() });

describe('ShowTheLocation', () => {
  it('should render correctly', () => {
    const component = shallow(<ShowTheLocation location="home" />);

    expect(component).toMatchSnapshot();
  });
});
