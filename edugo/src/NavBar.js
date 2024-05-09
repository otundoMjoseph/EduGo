import React from 'react';
import { NavLink } from 'react-router-dom';
import'w3-css/w3.css'


function Navbar() {

  return (
    <nav className="w3-bar w3-black ">
    <NavLink className="w3-bar-item w3-button w3-blue w3-left" to="/home" >Home</NavLink>
    <NavLink className="w3-bar-item w3-button w3-right" to="/delete" >Delete Student</NavLink>
    <NavLink className="w3-bar-item w3-button w3-right"    to="/submit">New Student</NavLink>
    <NavLink className="w3-bar-item w3-button  w3-right"  to="/update">Update Student</NavLink>
    {/* <NavLink to="./" >Login</NavLink> */}

   

    </nav>
  );
}

export default Navbar;