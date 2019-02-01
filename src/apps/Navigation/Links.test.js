import React from 'react';

import Enzyme, { shallow, mount } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

import { MemoryRouter } from 'react-router-dom';
import {Provider} from "react-redux";
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { NotificationLink, HomeLinks, HomeLinksSm, NotAuthenticatedLinks, NotAuthenticatedLinksSm, AuthenticatedLinks, AuthenticatedLinksSm} from './Links';

Enzyme.configure({ adapter: new Adapter() });
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('<NotificationLink />', () => {
  it('should match the snapshot', () => {
    const component = shallow(<NotificationLink debug />);
    expect(component).toMatchSnapshot();
  });
});

describe('NotificationLink', () => {
  it('should render self and subcomponents', () => {
    const store = mockStore({});
    const enzymeWrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <NotificationLink />
        </MemoryRouter>
      </Provider>,);
    expect(enzymeWrapper.find('NotificationLink')).toBeDefined();
  });
});

describe('<HomeLinks />', () => {
  it('should match the snapshot', () => {
    const component = shallow(<HomeLinks debug />);
    expect(component).toMatchSnapshot();
  });
});

describe('<HomeLinksSm />', () => {
  it('should match the snapshot', () => {
    const component = shallow(<HomeLinksSm debug />);
    expect(component).toMatchSnapshot();
  });
});

describe('HomeLinksSm', () => {
  it('should render self and subcomponents', () => {
    const store = mockStore({});
    const enzymeWrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <HomeLinksSm />
        </MemoryRouter>
      </Provider>,);
    expect(enzymeWrapper.find('HomeLinksSm')).toBeDefined();
  });
});

describe('<NotAuthenticatedLinks />', () => {
  it('should match the snapshot', () => {
    const component = shallow(<NotAuthenticatedLinks debug />);
    expect(component).toMatchSnapshot();
  });
});

describe('NotAuthenticatedLinks', () => {
  it('should render self and subcomponents', () => {
    const store = mockStore({});
    const enzymeWrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <NotAuthenticatedLinks />
        </MemoryRouter>
      </Provider>,);
    expect(enzymeWrapper.find('NotAuthenticatedLinks')).toBeDefined();
  });
});

describe('<NotAuthenticatedLinksSm />', () => {
  it('should match the snapshot', () => {
    const component = shallow(<NotAuthenticatedLinksSm debug />);
    expect(component).toMatchSnapshot();
  });
});

describe('NotAuthenticatedLinksSm', () => {
  it('should render self and subcomponents', () => {
    const store = mockStore({});
    const enzymeWrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <NotAuthenticatedLinksSm />
        </MemoryRouter>
      </Provider>,);
    expect(enzymeWrapper.find('NotAuthenticatedLinksSm')).toBeDefined();
  });
});

describe('<AuthenticatedLinks />', () => {
  it('should match the snapshot', () => {
    const component = shallow(<AuthenticatedLinks debug />);
    expect(component).toMatchSnapshot();
  });
});

describe('AuthenticatedLinks', () => {
  it('should render self and subcomponents', () => {
    const store = mockStore({});
    const enzymeWrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <AuthenticatedLinks />
        </MemoryRouter>
      </Provider>,);
    expect(enzymeWrapper.find('AuthenticatedLinks')).toBeDefined();
  });
});

describe('<AuthenticatedLinksSm />', () => {
  it('should match the snapshot', () => {
    const component = shallow(<AuthenticatedLinksSm debug />);
    expect(component).toMatchSnapshot();
  });
});

describe('AuthenticatedLinksSm', () => {
  it('should render self and subcomponents', () => {
    const store = mockStore({});
    const enzymeWrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <AuthenticatedLinksSm />
        </MemoryRouter>
      </Provider>,);
    expect(enzymeWrapper.find('AuthenticatedLinksSm')).toBeDefined();
  });
});
