import React from 'react';
import reducer from '../../reducers/LoginReducer';

describe('Login Reducer', () => {
  const data = {};


  it('should handle starting the registration process', () => {
    expect(
      reducer([], {
        type: 'STARTED',
      }),
    ).toEqual({
      error: null,
      successMsg: null,
      loading: true,
    });
  });

  it('should have data in successMSg successfully', () => {
    expect(
      reducer([], {
        type: 'SUCCESSFUL',
        data,
      }),
    ).toEqual({ loading: false, successMsg: undefined, });
  });

  it('should have failed data in successMSg successfully', () => {
    expect(
      reducer(undefined, {
        type: 'FAILED',
        error: {err:'error'} ,
      }),
    ).toEqual({ loading: false, successMsg: null });
  });


  it('should return default state', () => {
    expect(
      reducer([], {
        type: 'default',
      }),
    ).toEqual([]);
  });

});
