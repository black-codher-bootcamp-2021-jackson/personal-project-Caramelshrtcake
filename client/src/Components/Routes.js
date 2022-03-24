import React from "react";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import About from "./About";
import "../App.css";
import NavBar from "../Components/NavBar";
import Demonstrations from "./Demonstrations";
import Locations from "./Locations";

export default function MyRoutes ({user, setUser}){
  
  return (
      <>
     
        <BrowserRouter>
        <div className="App-Header">  <img class="App-logo"img src="/logo.png" alt="BLC-HER logo"/>
        <div className="Menu-Container"> <a href="">Menu</a> </div>
        <NavBar user={user} setUser={setUser} />
    </div>
               {user ? <p>Signed in as{user.firstname}</p> :null}
    
          <Routes>
          <Route path="/demonstrations" element={<Demonstrations/>} />
          <Route path="/locations" element={<Locations user={user} />} />
             <Route path="/About" element={<About/>} />
             <Route path="/" element={<Home/>} />
             <Route path="/Login" element={<Login user={user} setUser={setUser}/>} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }

