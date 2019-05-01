import React from 'react';
import { mount, shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import { userSignupRequest } from '../../actions/signup/signUpActions'
import SignupPageComponent, {SignupPage} from '../../containers/signup/SignupContainer'
import {Provider} from 'react-redux';
import store from '../../Store';

describe('MapStateToDispatch', () => {


  it('access mapStateToProps', () => {
  const props = {
    userSignupRequest: jest.fn()
  }
   mount(<Provider store={store}><SignupPageComponent {...props} /></Provider>);

  });


});

describe('User registration actions', () => {
   M.toast = jest.fn();
  const userData = {
    username: 'edgar',
    email: 'edgarnyabongo@gamil.com',
    password: 'P@ssw0rd2',
    password2: 'P@ssw0rd2',
  };
  const WrongUserData = {
    username: 'edgar',
    email: 'edgarnyabongo.com',
    password: 'P@ssw0rd2',
    password2: 'P@ssw0rd2',
  };
  beforeEach(function() {
    moxios.install();
  });

  afterEach(function() {
    moxios.uninstall();
  });

  it('should not register a user', () => {
    M.toast = jest.fn();
    const mockStore = configureMockStore([thunk]);
    const store = mockStore({});

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: {errors: [{}]},
      });
    });

    const expectedAction = [
      { type: 'STARTED' },
      { type: 'FAILED', err: {errors: [{}]}},
    ];
    return store.dispatch(userSignupRequest(WrongUserData)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('should register a user successfully', () => {
    const mockStore = configureMockStore([thunk]);
    const store = mockStore({
      error: null,
      successMsg: null,
      loading: false,
    });

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 201,
        response: {user: { Message: 'Successfully logged in'} },
      })

        });
      const expectedAction = [
        { type: 'STARTED' },
        { type: 'SUCCESSFUL', data: {user: { Message: 'Successfully logged in'} } },
      ];
      return store.dispatch(userSignupRequest(userData)).then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
  });


});

describe('Form', () => {
  const newProps = {
    submitHandler: jest.fn(),
    inputHandler: jest.fn(),
    password: '1234',
    password2: '1234',
    email:'test@example.com',
    username: 'test',
    userSignupRequest: jest.fn(),
    isLoading: true
  };
  it('should change property name in the state', () => {
    const componentWrapper = mount(<Provider store={store}><SignupPage {...newProps} /></Provider>);
    componentWrapper.setProps({ email: 'blah@gmail.com' });
    expect(componentWrapper.props().email).toEqual('blah@gmail.com');
  });


it('calls input handler', () => {
  const props= {
    userSignupRequest : jest.fn()
  }
    let wrapper = shallow(<SignupPage {...props} />);
    const instance = wrapper.instance();
    const event = {
    target: {
      name:'edgar'
    }
    }
    instance.inputHandler(event);
    });

  it('calls submit handler', () => {
    const props= {
      userSignupRequest : jest.fn()
    }
    let wrapper = shallow(<SignupPage {...props} />);
    const instance = wrapper.instance();
    const event = {
      target: {
        name:''
      }
    }
    event.preventDefault = jest.fn()
    instance.submitHandler(event);
  });

  it('calls submit handlers else if passwords are not equal', () => {
    const props= {
      userSignupRequest : jest.fn()
    }
    let wrapper = shallow(<SignupPage {...props} />);
    const instance = wrapper.instance();
    const event = {
      target: {}
    }
    event.preventDefault = jest.fn();
    instance.setState({password:"1234",password2:"123"});
    instance.submitHandler(event);
  })
});
