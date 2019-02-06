import React from 'react';
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16/build";
import ErrorBoundary from "./errorBoundary";
import {mountWithStore} from "../../resetPassword/tests/email_reset.test";


Enzyme.configure({adapter: new Adapter()});

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

class TempElement extends React.Component {
  componentDidMount() {
    throw new Error("This is a random error");
  }

  render() {
    return (
      <div />
    );
  }
}

describe('Error boundary should catch Errors', function () {
  const wrapper = mountWithStore(
    <ErrorBoundary>
      <TempElement />
    </ErrorBoundary>,
    mockStore({
      Errors: {
        message: ""
      }
    })
  );

  it('should render an error page', function () {
    expect(wrapper.find('div')).toBeDefined();
    expect(wrapper.find('PageBackground')).toBeDefined();
    expect(wrapper.find('h1').length).toEqual(1);
    expect(wrapper.find('h1').text()).toEqual("500!");
  });
});
