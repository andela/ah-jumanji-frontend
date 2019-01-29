import React from 'react';
import Enzyme, { mount, shallow} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import {
  MemoryRouter
} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  Provider
} from "react-redux";

import Viewpage, {mapStateToProps} from'./_articleview';

Enzyme.configure({ adapter: new Adapter() });
const middlewares = [thunk];
const fakeStore = configureStore(middlewares);

describe('_viewage', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Viewpage debug />);
    expect(component).toMatchSnapshot();
  });
});

describe('if state has all requirements', () => {
  const store = fakeStore({
    Articles:{
      read_article:{
        body:"This is body"
      }
    }
  });
  const wrapper = mount(
    <Provider store={store}>
      <MemoryRouter>
        <Viewpage slug="This is slug" />
      </MemoryRouter>
    </Provider>
  );

  it('should render all div', () => {
    expect(wrapper.find('div').exists()).toBe(true);
  });

});
describe('If state is undefined', () => {
  const store = fakeStore({
    Articles:{
    }
  });
  const wrapper = mount(
    <Provider store={store}>
      <MemoryRouter>
        <Viewpage slug="This is slug" />
      </MemoryRouter>
    </Provider>
  );

  it('should render all div', () => {
    expect(wrapper.find('div').exists()).toBe(true);
  });

});

describe('Social auth Props test', () => {
  let expectedData = null;

    it('should show previous', () => {
        let myProps = {"slug": "this is le slug"};
        const initialState = {
          Articles:{
            read_article: {
              author: "Granson",
              body: "This is a test article"}
            }
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