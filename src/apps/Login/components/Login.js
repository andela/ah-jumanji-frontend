import React from "react";

const Login = () => (
  <div className="login">
    <h3>Login</h3>
    <label htmlFor="email">
      Email
      <input id="email" name="email" type="email" placeholder="Email Address" />
    </label>
    <br />
    <button type="button">Submit</button>
  </div>
);

export default Login;
