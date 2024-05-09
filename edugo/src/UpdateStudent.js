import React from 'react'
import Navbar from './NavBar'

export default function UpdateStudent() {
  return (
    <div className="submit-input-container">
        <Navbar />
        <img className="student-img" src='./images/getstudent.png' width={"120px"} alt={"user-logo"} ></img>
        <h1>Update Student's Details</h1>
    </div>
  )
}
