import React from 'react';
import SignUp from '../../components/signup/SignUp';
import renderer from 'react-test-renderer';


describe('SignupForm Component', () => {

  it('it matches the snapshot', () => {
    const tree = renderer.create(<SignUp />).toJSON();
    expect(tree).toMatchSnapshot();
  });


});
