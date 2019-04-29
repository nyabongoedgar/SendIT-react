import React from 'react';
import { mount, shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import { parcelHandler } from '../../actions/parcel/parcelActions';
import ParcelComponent, {ParcelContainer} from '../../containers/parcel/ParcelContainer';
import {Provider} from 'react-redux';
import store from '../../Store';

describe('MapStateToDispatch', () => {


  it('access mapStateToProps', () => {
  const props = {
    parcelHandler: jest.fn()
  }
   mount(<Provider store={store}><ParcelComponent {...props} /></Provider>);

  });


});

describe('parcel creation actions', () => {
   M.toast = jest.fn();
  const parcelData = {
    "parcel_description":"this parcel contains a phone",
    "parcel_weight":50,
    "parcel_source":"Ntinda", 
    "parcel_destination":"Mbarara",
    "receiver_name":"Ritah", 
    "receiver_telephone":"077890340",
    "current_location":"Ntinda",
    "status":"pending"
  };
  const WrongParcelData = {
    "parcel_description":"this parcel contains a phone",
    "parcel_weight":50,
    "parcel_source":"Ntinda", 
    "parcel_destination":"Mbarara",
  };

  beforeEach(function() {
    moxios.install();
  });

  afterEach(function() {
    moxios.uninstall();
  });

  it('should not make an order', () => {
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
    return store.dispatch(parcelHandler(WrongParcelData)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('should make an order successfully', () => {
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
        response: { message: 'order placed !'} ,
      })

        });
      const expectedAction = [
        { type: 'STARTED' },
        { type: 'SUCCESSFUL', data: { message: 'order placed !'}  },
      ];
      return store.dispatch(parcelHandler(parcelData)).then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
  });


});

describe('Form', () => {
  const newProps = {
    submitHandler: jest.fn(),
    inputHandler: jest.fn(),
    parcel_description: '',
    parcel_weight: '',
    parcel_source: '',
    parcel_destination: '',
    receiver_name: '',
    receiver_telephone: '',
    isLoading: true
  }
  it('should change property name in the state', () => {
    const componentWrapper = mount(<Provider store={store}><ParcelContainer {...newProps} /></Provider>);
    componentWrapper.setProps({ receiver_name: 'pato' });
    expect(componentWrapper.props().receiver_name).toEqual('pato');
  });


it('calls input handler', () => {
  const props= {
    parcelHandler : jest.fn()
  }
    let wrapper = shallow(<ParcelContainer {...props} />);
    const instance = wrapper.instance();
    const event = {
    target: {
      name:'parcel_source'
    }
    }
    instance.inputHandler(event);
    });

  it('calls submit handler', () => {
    const props= {
      parcelHandler : jest.fn()
    }
    let wrapper = shallow(<ParcelContainer {...props} />);
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
