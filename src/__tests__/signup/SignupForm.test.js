import React from 'react';
import SignUp from '../../components/signup/SignUp';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

describe('SignupForm Component', () => {

  it('it matches the snapshot', () => {
    const tree = renderer.create(<BrowserRouter><SignUp /></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });


});
