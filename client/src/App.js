import React, { useState, useEffect } from "react";
import MyRoutes from "./Components/Routes"
import "./App.css";
import NavBar from "./Components/NavBar";
import axios from "axios";
// SERVICES THAT CALL OUR API ENDPOINTS
import { getAllProfiles } from "./services/profileService";
import {userLogin} from "./services/userService";
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Home from "./Components/Home";
import Login from "./Components/Login";
import About from "./Components/About";
import createAccount from "./Components/CreateAccount";

// import "./Components/styles.css";
// import YoutubeEmbed from "./Components/YoutubeEmbed";

  
function App() {
 
    // user, setUser, userState===useState
//   const [profiles, setProfiles] = useState(null);
// // //////////////////////async function await makes the requests wait instead for the response
//   useEffect(() => {
//     async function getProfiles() {
//       if (!profiles) {
//         const response = await getAllProfiles();
//         setProfiles(response);
//       }
//     }

//     getProfiles();
//   }, [profiles]);
// null when app starts there will be no user, setUser is where we make changes to the variable 
  const [user, setUser] = useState(null);



// passing user through state a 2nd time, calling Login using these props
  return (
  <>
        <MyRoutes user={user} setUser={setUser} />
      
        {/* // <Login user={user} setUser={setUser}/>} */}
{/* giving routes access to pass in login, */}
 
    </>
       
  )
};
<Router>
      <NavBar />
      <Routes>
        <Route path='/' exact Component={Home} />
        <Route path='/About' Component={About} />
        <Route path='/Login' Component={Login} />
        <Route path='/createAccount' Component={createAccount} />
      </Routes>
    </Router>
    // <div>
    //   <ul>
    //     {profiles && profiles.length > 0 ? (
    //       profiles.map((profile) => renderProfile(profile))
    //     ) : (
    //       <p>No profiles found</p>
    //     )}
    //   </ul>
    // </div>


    
//  );


// /////////

// const Home = () => {
//   <div>
//     <h1>Home PAge</h1>
//   </div>
//  <Router>
  // <div className="Nav">
  // <Nav />
  // {/* <Route path="/" /> */}
  // <Route path="/About" element={About} />
  // <Route path="/" element={Home} />
  // <Route exact path="/"Login" element={Login} />
  // {/* <createAccount /> */}
  // </div>
  // </Router>
  // function appNav(){
  // <Router>
  // // <div className="Nav">
  // // <Nav />
  // {/* <Route path="/" /> */}
  // <Route path="/About" element={About} />
  // <Route path="/" element={Home} />
  // <Route exact path="/Login" element={Login} />
  // {/* <createAccount /> */}
  // </div>
  // </Router>
  // /////////////////////below is the emebed for url and demo////////////////
  //  function embedId (){
      
  //   <div className="App">
  //   <h1>Youtube Embed</h1>
  //   <YoutubeEmbed embedId="rokGy0huYEA" />
  // </div>
  

export default App;
