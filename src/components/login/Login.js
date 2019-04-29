import React from "react";
import { BrowserRouter, Link} from 'react-router-dom';

const Login = (props) => {
  let Loader = require('react-loader')
  return (
    <div className="authForms">
      <form id="login_form" onSubmit={props.submitHandler}>
      <h1>SIGN IN</h1>
        <input
          value={props.username}
          onChange={props.inputHandler}
          type="text"
          name="username"
          placeholder="Username"
          id="login-username"
          required
        />

        <input
          value={props.password}
          onChange={props.inputHandler}
          type="password"
          name="password"
          placeholder="Password"
          id="login-password"
          required
        />
        <Loader loaded={!props.isLoading}>
        <button type="submit" className="btn">
          SUBMIT
        </button>
        </Loader>

        <span>
          <p id="error" />
        </span>

        <p>
          <BrowserRouter>
          Dont have an account ?. 
          <Link to="/signup">Create account</Link> 
          </BrowserRouter>
        </p>
      </form>
    </div>
  );
};

export default Login;
