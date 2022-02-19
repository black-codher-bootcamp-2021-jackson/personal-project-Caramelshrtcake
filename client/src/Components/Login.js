import React, { useState } from "react";
import { userLogin } from "../services/userService";
import NavBar from "../Components/NavBar";
import "../App.css";

const Login = ({ user, setUser }) => {
  const [error, setError] = useState(false);
  const onSubmit = async (event) => {
    event.preventDefault();
    // ////////////////////////////
    const data = {
      identifier: event.target.elements.username.value,
      password: event.target.elements.password.value,
    };
    const response = await userLogin(data);
    if (response.signedIn) {
      setUser(response.user);
      setError(false)
    }else{
      setError(true);
    }
    console.log(response);
    // console.log(data);

    //   console.log(event.target.elements);
    //   console.log("onSubmit form");
  };

  return (
    <div className="MainContainer">
      <form id="login-form" onSubmit={onSubmit}>
        <div className="LoginCircleContainer">
          <h1 id="login-header">Login</h1>
          {error ? (
            <div id="login-error-msg-holder">
              <p id="login-error-msg">
                Invalid username{" "}
                <span id="error-msg-second-line">and/or password</span>
              </p>
            </div>
          ) : null}
          <input
            type="text"
            name="username"
            id="username-field"
            className="login-form-field"
            placeholder="Username"
          />
          <input
            type="password"
            name="password"
            id="password-field"
            className="login-form-field"
            placeholder="Password"
          />
        </div>
        <div className="SubmitButtonContainer">
          <input type="submit" value="Login" id="login-form-submit" />
        </div>
      </form>
    </div>
  );
};

export default Login;
