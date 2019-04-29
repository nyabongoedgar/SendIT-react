import * as actions from '../../actions/parcel/parcelActions';
import React from 'react';

describe('actions', () => {

  it('should create an action to register a user successfully', () => {
    const data = {
      "parcel_description":"this parcel contains a phone",
      "parcel_weight":50,
      "parcel_source":"Ntinda", 
      "parcel_destination":"Mbarara",
      "receiver_name":"Ritah", 
      "receiver_telephone":"077890340",
      "current_location":"Ntinda",
      "status":"pending"
    };

    const expectedAction = {
      type: 'SUCCESSFUL',
      data,
    };
    expect(actions.successOrder(data)).toEqual(expectedAction);
  });

  it('should create an action of FAILED to register a user successfully', () => {
    const err = {
      error: {
        message: 'Order was not placed',
      },
    };
    const expectedAction = {
      type: 'FAILED',
      err,
    };
    expect(actions.failedOrder(err)).toEqual(expectedAction);
  });

  it('should create an action of startAction to during user registration', () => {
    const expectedAction = {
      type: 'STARTED',
    };
    expect(actions.startAction()).toEqual(expectedAction);
  });

});
