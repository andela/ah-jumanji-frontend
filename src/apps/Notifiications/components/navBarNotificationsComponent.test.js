import React from 'react';
import Enzyme, {shallow} from "enzyme/build";
import Adapter from "enzyme-adapter-react-16/build";
import NotificationsBadge from "./navBarNotificationsComponent";

Enzyme.configure({adapter: new Adapter()});

describe('Test nav bar badge', function () {
  let count = 5;
  const component = shallow(<NotificationsBadge notifications_count={count} />);
  it('should render correctly', function () {
    expect(component.find('.dropdown').exists()).toBe(true);
    expect(component.find('.dropdown-toggle').exists()).toBe(true);
  });

  it('should render props correctly', function () {
    // console.log(component.debug());
    expect(component.find('.notifications-badge').text()).toEqual('5');
  });
});
