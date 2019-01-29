import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import Profile from './Profile';
import EditProfile from './EditProfile';
import { initialState } from '../reducers/profileReducer';

Enzyme.configure({ adapter: new Adapter() });
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const shallowWithStore = (component, store) => {
  const context = {
    store,
  };
  return shallow(component, {context});
};

describe('Profile: ', () => {
  let profileContainer;
  beforeEach(() => {
    profileContainer = shallow(<Profile />);
  });

  it('gets profile: ', () => expect(profileContainer.exists()).toEqual(true));
  it('renders props: ', () => {
    const profile = shallow(<Profile data="jumanji" />);
    expect(profile.instance().props.data).toBe('jumanji');
  });

  beforeEach(() => {
    profileContainer = shallow(<EditProfile />);
  });

  it('gets edit profile form: ', () => expect(profileContainer.exists()).toEqual(true));
  it('renders props: ', () => {
    const editProfile = shallow(<EditProfile username="rollplanes_" />);
    expect(editProfile.instance().props.username).toBe("rollplanes_");
  });
});

describe('<Profile />', () => {
  let store;

  const props = {
    profile: {},
    viewProfile: jest.fn(),
  };

  beforeEach(() => {
    store = mockStore(initialState);
    mount(
      <Provider store={store}>
        <MemoryRouter>
          <Profile {...props} />
        </MemoryRouter>
      </Provider>
    );
  });

  it('renders without crashing', () => {
    shallowWithStore(<Profile />, store);
  });
});


describe('Edit Profile component', () => {
  let wrapper;
  beforeEach(() => {
    let store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <EditProfile profile={profile} />
        </MemoryRouter>
      </Provider>
    );
  });

  let profile = {
    'first_name': 'fabisch',
    'last_name': 'apeli',
    'website': 'https://www.andela.com',
    'phone_number': '08883827832',
    'bio': 'bambino',
    'country': 'ken',
    'twitter_handle': '9thMarch'
  };

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render edit profile page correctly', () => {
    expect(wrapper.find('.btn btn-success')).toBeDefined();
    expect(wrapper.find('.form-control')).toBeDefined();
    expect(wrapper.find('EditFormInput')).toBeDefined();
    expect(wrapper.find('Nav')).toBeDefined();
    expect(wrapper.find('select')).toBeDefined();
  });

});
