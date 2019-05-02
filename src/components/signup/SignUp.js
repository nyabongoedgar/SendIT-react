import React from "react";
import { BrowserRouter, Link } from 'react-router-dom';
import LoginContainer from '../../containers/login/LoginContainer';

const SignUp = props => {
  let Loader = require('react-loader')
  return (
    <div className="authForms">
      <form onSubmit={props.submitHandler} id="#signUpForm">
      <h1>SIGN UP</h1>
        <input
          value={props.username}
          onChange={props.inputHandler}
          required
          name="username"
          id="username"
          placeholder="Username"
          type="text"
        />
        <br />
        <input
          value={props.email}
          onChange={props.inputHandler}
          required
          name="email"
          id="email"
          placeholder="Email Address"
          type="text"
        />
        <br />
        <input
          value={props.password}
          onChange={props.inputHandler}
          required
          name="password"
          id="password"
          placeholder="Password"
          type="password"
        />
        <br />
        <input
          value={props.password2}
          onChange={props.inputHandler}
          required
          name="password2"
          id="password2"
          placeholder="Confirm Password"
          type="password"
        />
        <br />
        <Loader loaded={!props.isLoading}>
        <button type="submit" className="btn regBtn">
          Create account
        </button>
        </Loader>
        <br />
          I have an account! 
          <Link to="/login">Login</Link>
        
        <br />
      </form>
    </div>
  );
};

export default SignUp;
