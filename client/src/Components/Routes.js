import React from "react";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import About from "./About";
import "../App.css";
import NavBar from "../Components/NavBar";

export default function MyRoutes ({user, setUser}){
  
  return (
      <>
     
        <BrowserRouter>
        <NavBar user={user} setUser={setUser} />
        {user ? <p>Signed in as{user.firstname}</p> :null}
    
          <Routes>
             <Route path="/About" element={<About/>} />
             <Route path="/" element={<Home/>} />
             <Route path="/Login" element={<Login user={user} setUser={setUser}/>} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }

