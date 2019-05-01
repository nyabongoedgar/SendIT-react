import React from 'react';
import { mount, shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import { userLoginRequest } from '../../actions/login/loginActions'
import LoginComponent, {LoginContainer} from '../../containers/login/LoginContainer';
import {Provider} from 'react-redux';
import store from '../../Store';

describe('MapStateToDispatch', () => {


  it('access mapStateToProps', () => {
  const props = {
    userSignupRequest: jest.fn()
  }
   mount(<Provider store={store}><LoginComponent {...props} /></Provider>);

  });


});

describe('User login actions', () => {
   M.toast = jest.fn();
  const userData = {
    username: 'nyabongo',
    password: '12345678'
  };
  const WrongUserData = {
    username: 'edgar',
    password: 'mammgo'
  };
  beforeEach(function() {
    moxios.install();
  });

  afterEach(function() {
    moxios.uninstall();
  });

  it('should not login a user', () => {
    M.toast = jest.fn();
    const mockStore = configureMockStore([thunk]);
    const store = mockStore({});

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: {error: [{}]},
      });
    });

    const expectedAction = [
      { type: 'STARTED' },
      { type: 'FAILED', err: {error: [{}]}},
    ];
    return store.dispatch(userLoginRequest(WrongUserData)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('should login a user successfully', () => {
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
        response: { message: 'Successfully logged in'}
      })

        });
      const expectedAction = [
        { type: 'STARTED' },
        { type: 'SUCCESSFUL', data: { message: 'Successfully logged in'} },
      ];
      return store.dispatch(userLoginRequest(userData)).then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
  });


});

describe('Form', () => {
  const newProps =  {
    submitHandler:jest.fn(),
    inputHandler:jest.fn(),
    password: '',
    username: '',
    userLoginRequest: jest.fn(),
    isLoading:false
}
  it('should change property name in the state', () => {
    const componentWrapper = mount(<Provider store={store}><LoginContainer {...newProps} /></Provider>);
    componentWrapper.setProps({ username: 'BillyBones' });
    expect(componentWrapper.props().username).toEqual('BillyBones');
  });


it('calls input handler', () => {
  const props= {
    userLoginRequest : jest.fn()
  }
    let wrapper = shallow(<LoginContainer {...props} />);
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
      userLoginRequest : jest.fn()
    }
    let wrapper = shallow(<LoginContainer {...props} />);
    const instance = wrapper.instance();
    const event = {
      target: {
        name:''
      }
    }
    event.preventDefault = jest.fn()
    instance.submitHandler(event);
  });

 
});
