import axios from 'axios';
import M from 'materialize-css/dist/js/materialize.js';

export const successOrder= data => ({
  type: 'SUCCESSFUL',
  data,
});

export const startAction = () => ({
  type: 'STARTED',
});

export const failedOrder = err => ({
  type: 'FAILED',
  err,
});

export const parcelHandler = parcelData => async (dispatch) => {
  dispatch(startAction());
  try {
    const response = await axios.post(
      'https://sendit299.herokuapp.com/api/v2/parcels',
      parcelData, {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem("token")
        }
      }
    );
    dispatch(successOrder(response.data));
    M.toast({ html: 'You order has been placed Please !', classes: 'green' });
  } catch (error) {
    dispatch(failedOrder(error.response.data));
    M.toast( {html: error.response.data.message, classes: 'red'} );
  }
};
