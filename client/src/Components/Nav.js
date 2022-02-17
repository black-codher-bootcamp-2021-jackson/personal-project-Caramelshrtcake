import React from "react";
import "../App.css";
import { Link, Route, BrowserRouter, navlinks, Routes } from "react-router-dom";
import Home from "../Components/Home";
import Login from "../Components/Login";
import About from "../Components/About";
// import 'bootstrap/dist/css/bootstrap.min.css';

function Nav() {
  return (
    <BrowserRouter>
    <Routes>
    <nav>
      <h3>Logo</h3>
      <ul className="nav-links">
        <Link to="/About" element={<About />}>
        </Link>
        <Link to="/" element={<Home />}>
          Home
        </Link>
        <li>Home</li>
        <Link to="/Login" element={<Login />}>
          Login
        </Link>
        <li>Login</li>
        <Link>
          <li>createAccount</li>
        </Link>
      </ul>
    </nav>
    </Routes>
    </BrowserRouter>
  );

  }
    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
  
  //           <BrowserRouter>
  //           <Routes>
  //              <Route path="/About" element={<About/>} />
  //              <Route path="/" element={<Home/>} />
  //              <Route path="/Login" element={<Login user={user} setUser={setUser}/>} />
  //           </Routes>
  //         </BrowserRouter>
          
      
  //       };
  //   <BrowserRouter>
  //     <ReactBootStrap.Navbar collapseOnSelect expand="sm" bg="primary" variant="dark">
  //   <ReactBootStrap.Navbar.Brand href="#home">CAP APP</ReactBootStrap.Navbar.Brand>
  //   <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  //   <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
  //     <ReactBootStrap.Nav className="me-auto">
  //       <ReactBootStrap.Nav.Link href="#About">About</ReactBootStrap.Nav.Link>
  //       <ReactBootStrap.Nav.Link href="#Login">Login</ReactBootStrap.Nav.Link>
  //       <ReactBootStrap.NavDropdown title="Dropdown" id="collasible-nav-dropdown">
  //         <ReactBootStrap.NavDropdown.Item href="#action/3.1">Action</ReactBootStrap.NavDropdown.Item>
  //         <ReactBootStrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootStrap.NavDropdown.Item>
  //         <ReactBootStrap.NavDropdown.Item href="#action/3.3">Something</ReactBootStrap.NavDropdown.Item>
  //         <ReactBootStrap.NavDropdown.Divider />
  //         <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>
  //       </ReactBootStrap.NavDropdown>
  //     </ReactBootStrap.Nav>
  //     <Nav>
  //       <Nav.Link href="#deets">More deets</Nav.Link>
  //       <Nav.Link eventKey={2} href="#memes">
  //         Dank memes
  //       </Nav.Link>
  //     </Nav>
  //   </ReactBootStrap.Navbar.Collapse>
    
  // </ReactBootStrap.Navbar>
  // </BrowserRouter>
      

export default Nav;
