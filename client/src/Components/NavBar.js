import React from 'react';
import {  Link, useNavigate } from "react-router-dom";


const NavBar= ({user, setUser}) =>{
 const navigate = useNavigate()
  function logOut (event) {
    event.preventDefault()
    setUser(null)
navigate("/Login")
  }
  return (
  <div>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/About">AboutUs</Link>
    </li>
    <li>
    {user ? <a href ="" onClick={logOut}>Log Out</a> : <Link to="/Login">Login</Link> } 
         </li>
    {/* <li>
      <Link to="/createAccount">Goats</Link>
    </li> */}
  </div>
  );
}
export default NavBar;