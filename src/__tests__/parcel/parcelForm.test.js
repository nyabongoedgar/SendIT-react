import React from 'react';
import CreateParcel from '../../components/parcels/CreateParcel';
import renderer from 'react-test-renderer';


describe('SignupForm Component', () => {

  it('it matches the snapshot', () => {
    const tree = renderer.create(<CreateParcel />).toJSON();
    expect(tree).toMatchSnapshot();
  });


});
