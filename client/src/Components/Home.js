import React, { useEffect, useState } from "react";
import "../App.css";
import Cap from "./Cap";
import YoutubeEmbed from "./YoutubeEmbed";
import { getDemonstrations } from "../services/demonstrationsService";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate()
   return (
    <div className="Home">
       <h3>Home Page</h3>
      <header>
      Welcome to the wonderful CAP APP,
      hoping you find everything you need and that you return again, 
      please share with your friends and family. 
      </header>
    
      <Cap />
      {/* <h6>
      Welcome to the wonderful CAP APP,
      hoping you find everything you need and that you return again, 
      please share with your friends and family. 
      </h6> */}
           <div className="HomeScreenbutton">
        <button onClick={()=> navigate("/demonstrations")}>Demonstrations</button>
        <button onClick={()=> navigate("/locations")}>Locations</button>
        <button>Availability</button>
        <button>Planner</button>
        <button>Community</button>
        {/* <button>CameraFunction</button> */}
      </div>
    </div>
  );
};

export default Home;
