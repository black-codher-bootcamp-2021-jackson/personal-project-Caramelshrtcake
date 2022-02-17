import React from "react";
import { userLogin } from "../services/userService";
import NavBar from "../Components/NavBar";
import "../App.css";



const Login = ({ user, setUser }) => {
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
    }
    console.log(response);
    // console.log(data);
    
    //   console.log(event.target.elements);
    //   console.log("onSubmit form");
  };

  return (
      
    <div>
      {user ? <p>Signed in as{user.firstname}</p> : null}
      <h1 id="login-header">Login</h1>
      <div id="login-error-msg-holder">
        <p id="login-error-msg">
          Invalid username{" "}
          <span id="error-msg-second-line">and/or password</span>
        </p>
        {/* <img src={backgroundimage} width="500" alt="Fitnesstracker"/> */}
      </div>
      <form id="login-form" onSubmit={onSubmit}>
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
        <input type="submit" value="Login" id="login-form-submit" />
      </form>
    </div>
  );
};

export default Login;
