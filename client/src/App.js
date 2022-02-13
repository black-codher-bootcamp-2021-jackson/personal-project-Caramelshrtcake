import React, { useState, useEffect } from "react";
import axios from "axios";
// SERVICES THAT CALL OUR API ENDPOINTS
import { getAllProfiles } from "./services/profileService";
import {userLogin} from "./services/userService";
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Home from "./";
import Login from "./Components/Login";
import About from "./Components/About";
import createAccount from "./Components/createAccount";


function App() {
    // user, setUser, userState===useState
  const [profiles, setProfiles] = useState(null);
// //////////////////////async function await makes the requests wait instead for the response
  useEffect(() => {
    async function getProfiles() {
      if (!profiles) {
        const response = await getAllProfiles();
        setProfiles(response);
      }
    }

    getProfiles();
  }, [profiles]);
// null when app starts there will be no user, setUser is where we make changes to the variable 
  const [user, setUser] = useState(null);



const onSubmit=async(event) =>{
  event.preventDefault()
  // ////////////////////////////
const data={identifier:event.target.elements.username.value, password:event.target.elements.password.value,

}
const response=await userLogin(data)
if(response.signedIn)
{
setUser(response.user)
}
console.log(response);
// console.log(data);
//   console.log(event.target.elements);
//   console.log("onSubmit form");
}


  const renderProfile = (user) => {
    return (
      <li key={user._id}>
        <h3>
          {`${user.first_name} 
          ${user.last_name}`}
        </h3>
        <p>{user.location}</p>
      </li>
       );

  };




  return (
    // <div>
    //   <ul>
    //     {profiles && profiles.length > 0 ? (
    //       profiles.map((profile) => renderProfile(profile))
    //     ) : (
    //       <p>No profiles found</p>
    //     )}
    //   </ul>
    // </div>
    

    
  <div>
   {user?<p>Signed in as{user.firstname}</p>:null}
  <h1 id="login-header">Login</h1>
  
  <div id="login-error-msg-holder">
    <p id="login-error-msg">Invalid username <span id="error-msg-second-line">and/or password</span></p>
  </div>
<form id="login-form" onSubmit ={onSubmit}>
    <input type="text" name="username" id="username-field" className="login-form-field" placeholder="Username"/>
    <input type="password" name="password" id="password-field" className="login-form-field" placeholder="Password"/>
    <input type="submit" value="Login" id="login-form-submit"/>
    
  </form>
  
</div>

 );
}

export default App;
