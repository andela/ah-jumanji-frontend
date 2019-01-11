import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import configureMockStore from "redux-mock-store";
import {MemoryRouter} from 'react-router-dom';
import ForgotPassword from '../components/PasswordResetComponent';
import ResetCode from "../components/PasswordResetCodeComponent";
import EmailReset from "../components/emailForm";
import CodeCollectionForm from "../components/collectResetURLForm";


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

Enzyme.configure({adapter: new Adapter()});

const shallowWithStore = (component, store) => {
  const context = {
    store,
  };
  return shallow(component, {context});
};

const mountWithStore = (component, store) => {
  return mount(
    <Provider store={store}>
      <MemoryRouter>
        {component}
      </MemoryRouter>
    </Provider>
  );
};


describe('ForgotPasswordComponent', () => {
  it('should render  ', () => {
    const component = shallow(<ForgotPassword debug />);

    expect(component).toMatchSnapshot();
  });

  it("should render an email field", () => {
    const component = shallow(<ForgotPassword debug />);

    expect(component.find('.form-control')).toBeDefined();
  });

  it("should render a submit button", () => {
    const component = shallow(<ForgotPassword debug />);

    expect(component.find('.form-btn')).toBeDefined();
  });

  it("should render an email component", () => {
    const component = shallow(<ForgotPassword debug />);

    expect(component.find('EmailReset')).toBeDefined();

  });

});

describe('Collect password updates', () => {
  let reset_code = {
    params: {
      reset_code: ""
    }
  };

  const component = shallow(<ResetCode debug match={reset_code} />);

  it('should render ', () => {
    expect(component).toMatchSnapshot();
  });

  it('should have a notifications component', () => {
    expect(component.find('Notifications')).toBeDefined();
  });
});

describe("Render reset email component", () => {

  const InitialState = {
    resetAccountPassword: {}
  };
  const store = mockStore(InitialState);


  it('should render the form', function () {
    let component = shallowWithStore(<EmailReset />, store);
    expect(component).toMatchSnapshot();
  });

  it('should render self and subcomponents', () => {
    let component = mountWithStore(<EmailReset />, store);

    expect(component.find('button')).toBeDefined();
    expect(component.find('form')).toBeDefined();
    expect(component.find('Header')).toBeDefined();
    component = component.find('form').simulate('submit');
  });

  it('should reject invalid email', function () {
    let component = mountWithStore(<EmailReset />, store);

    let input = component.find('#email');
    expect(input).toBeDefined();
    input.simulate('change', {target: {value: 'Hello'}});
  });

});

describe("Render code collection form ", () => {
  const component = shallow(<CodeCollectionForm />);
  const InitialState = {
    resetAccountPassword: {}
  };
  const store = mockStore(InitialState);

  it('should render the form', function () {
    expect(component).toMatchSnapshot();
  });

  it('should have props undefined', function () {
    expect(component.props().recovery).toEqual(undefined);
  });

  it('should have a clickable button', function () {

    let component = mountWithStore(<CodeCollectionForm />, store);

    expect(component.find('button')).toBeDefined();
    expect(component.find('form')).toBeDefined();
    expect(component.find('Header')).toBeDefined();
    component.find('form').simulate('submit');

  });

  it('should reject non matching input', function () {
    let component = mountWithStore(<CodeCollectionForm />, store);
    component.debug();
    let input = component.find('#password1');
    let input2 = component.find('#password2');
    expect(input).toBeDefined();
    expect(input2).toBeDefined();
    input.simulate('change', {target: {value: 'Hello'}});
    input2.simulate('change', {target: {value: 'not HEllo'}});
    component.find('form').simulate('submit');


  });
});

