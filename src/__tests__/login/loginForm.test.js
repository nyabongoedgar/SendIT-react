import React from 'react';
import Login from '../../components/login/Login';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

describe('SignupForm Component', () => {

  it('it matches the snapshot', () => {
    const tree = renderer.create(<BrowserRouter><Login /></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });


});
