import React from "react";

const Login = props => {
  return (
    <div className="container">
      <form id="login_form" onSubmit={props.submitHandler}>
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

        <button type="submit" className="btn">
          SUBMIT
        </button>

        <span>
          <p id="error" />
        </span>

        <p>
          Dont have an account ?.
          <a href="register.html">Create account</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
