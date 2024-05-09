import React from 'react';
import { NavLink } from 'react-router-dom';
import "./NavBar.css"

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink> <input id='input' type='text' placeholder='Search' ></input> </NavLink>
    <NavLink to="/home" >Home</NavLink>
    <NavLink to="/delete" >Delete Student</NavLink>
    <NavLink to="/submit">New Student</NavLink>
    <NavLink to="/update">Update Student</NavLink>
    {/* <NavLink to="./" >Login</NavLink> */}

   

    </nav>
  );
}

export default Navbar;