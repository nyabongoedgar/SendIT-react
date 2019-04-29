import React from "react";

const SignUp = props => {
  return (
    <div>
      <form onSubmit={props.submitHandler}>
        <input
          value={props.username}
          onChange={props.inputHandler}
          required=""
          name="username"
          id="username"
          placeholder="Username"
          type="text"
        />
        <br />
        <input
          value={props.email}
          onChange={props.inputHandler}
          required=""
          name="email"
          id="email"
          placeholder="Email Address"
          type="text"
        />
        <br />
        <input
          value={props.password}
          onChange={props.inputHandler}
          required=""
          name="password"
          id="password"
          placeholder="Password"
          type="password"
        />
        <br />
        <input
          value={props.password2}
          onChange={props.inputHandler}
          required=""
          name="password2"
          id="password2"
          placeholder="Confirm Password"
          type="password"
        />
        <br />
        <button type="submit" className="btn">
          Create account
        </button>
        <br />
        <p id="error">{props.error}</p> <br />
        <p>
          I have an account! <a href="home.html">Login</a>
        </p>
        <br />
      </form>
    </div>
  );
};

export default SignUp;
