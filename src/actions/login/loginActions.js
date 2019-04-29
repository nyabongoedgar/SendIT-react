import axios from 'axios';
import M from 'materialize-css/dist/js/materialize.js';

export const successLogin= data => ({
  type: 'SUCCESSFUL',
  data,
});

export const startAction = () => ({
  type: 'STARTED',
});

export const failedLogin = err => ({
  type: 'FAILED',
  err,
});

export const userLoginRequest = userData => async (dispatch) => {
  dispatch(startAction());
  try {
    const response = await axios.post(
      'https://sendit299.herokuapp.com/api/v2/auth/login',
      userData,
    );
    dispatch(successLogin(response.data));
    M.toast({ html: 'Login successful !', classes: 'green' });
    //re-route clients to dashboard.
  } catch (error) {
    dispatch(failedLogin(error.response.data));
  }
};
