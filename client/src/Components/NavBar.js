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
      <div className='navbarElements'>
    <li>
    <img class="App-logo"img src="/logo.png" alt="BLC-HER logo"/>
     </li>
     
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/About">About Us</Link>
    </li>
    <li>
    {user ? <a href ="" onClick={logOut}>Log Out</a> : <Link to="/Login">Login</Link> } 
         </li>
         
  </div>
  );
}
export default NavBar;