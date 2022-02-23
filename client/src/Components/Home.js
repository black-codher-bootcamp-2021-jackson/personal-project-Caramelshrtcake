import React, { useEffect, useState } from "react";
import "../App.css";
import Cap from "./Cap";
import YoutubeEmbed from "./YoutubeEmbed";
import { getDemonstrations } from "../services/demonstrationsService";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate()
   return (
    <div>
      <h3>Home Page</h3>
      <Cap />
      <h1>
        WELCOME TO THE WONDERFUL CAP APP, HOPING YOU FIND EVERYTHING YOU NEED
        AND THAT YOU RETURN AGAIN, PLEASE SHARE WITH YOUR FRIENDS AND FAMILY
      </h1>
           <div className="HomeScreenbutton">
        <button onClick={()=> navigate("/demonstrations")}>Demonstrations</button>
        <button onClick={()=> navigate("/locations")}>Locations</button>
        <button>Availability</button>
        <button>Planner</button>
        <button>Community</button>
        <button>CameraFunction</button>
      </div>
    </div>
  );
};

export default Home;
