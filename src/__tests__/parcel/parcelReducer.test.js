import React from 'react';
import reducer from '../../reducers/parcelReducer';

describe('Parcel Reducer', () => {
  const data = {};


  it('should handle starting of a process', () => {
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

  it('should have data in message in successfully action', () => {
    expect(
      reducer([], {
        type: 'SUCCESSFUL',
        data,
      }),
    ).toEqual({ loading: false, successMsg: undefined, });
  });

  it('should have failed data in error object', () => {
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
