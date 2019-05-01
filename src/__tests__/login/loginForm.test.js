import React from 'react';
import Login from '../../components/login/Login';
import renderer from 'react-test-renderer';


describe('SignupForm Component', () => {

  it('it matches the snapshot', () => {
    const tree = renderer.create(<Login />).toJSON();
    expect(tree).toMatchSnapshot();
  });


});
