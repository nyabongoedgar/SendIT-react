import axios from 'axios';
import M from 'materialize-css/dist/js/materialize.js';

export const successRegistration = data => ({
  type: 'SUCCESSFUL',
  data,
});

export const startAction = () => ({
  type: 'STARTED',
});

export const failedRegistration = err => ({
  type: 'FAILED',
  err,
});

export const userSignupRequest = userData => async (dispatch) => {
  dispatch(startAction());
  try {
    const response = await axios.post(
      'https://sendit299.herokuapp.com/api/v2/auth/signup',
      userData,
    );
    dispatch(successRegistration(response.data));
    M.toast({ html: 'You are signed up, Please login', classes: 'green' });
    /* istanbul ignore next */
    setTimeout(() => window.location.reload(), 3000);
  } catch (error) {
    dispatch(failedRegistration(error.response.data));
  }
};
