import * as actions from '../../actions/login/loginActions';
import React from 'react';

describe('actions', () => {

  it('should create an action to login a user successfully', () => {
    const data = {
        username: 'nyabongo',
        password: '12345678'
    };
    const expectedAction = {
      type: 'SUCCESSFUL',
      data,
    };
    expect(actions.successLogin(data)).toEqual(expectedAction);
  });

  it('should create an action of FAILED to login a user successfully', () => {
    const err = {
      error: {
        'message': 'password doesnot match',
      },
    };
    const expectedAction = {
      type: 'FAILED',
      err,
    };
    expect(actions.failedLogin(err)).toEqual(expectedAction);
  });

  it('should create an action of startAction during user login', () => {
    const expectedAction = {
      type: 'STARTED',
    };
    expect(actions.startAction()).toEqual(expectedAction);
  });

});
