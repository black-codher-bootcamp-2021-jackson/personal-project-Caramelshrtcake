import React from "react";
import "../App.css";
import Cap from "./Cap";
import YoutubeEmbed from "./YoutubeEmbed"

const Home =() => {
    return (
        <div>
            <h3>Home Page</h3>
<Cap/>
            <h1>WELCOME TO THE WONDERFUL CAP APP, HOPING YOU FIND EVERYTHING YOU NEED AND THAT YOU RETURN AGAIN, PLEASE SHARE WITH YOUR FRIENDS AND FAMILY</h1>
            <YoutubeEmbed youtubeUrl = "https://www.youtube.com/watch?v=BQu26ABuVS0"/>
            <div className="HomeScreenbutton">
            <button>Demonstrations</button>
            <button>Location</button>
            <button>Availability</button>
            <button>Planner</button>
            <button>Community</button>
            <button>CameraFunction</button>
            </div>
        </div>
    
    );
};

export default Home;