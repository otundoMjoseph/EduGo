import React from 'react';
import Navbar from './NavBar';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
           <Navbar />
           <div className={"centered-element"}>
            <div className={"student-container"}>
                <h1>Student Management System Dashboard</h1>
                <br/><br/>
                <img src={"./images/dashboard-logo.png"} width={"400px"} alt={"dashboard-logo"}/>
                <br/><br/>
                <Link className={"back-link"} to='/submit'>New Student</Link>
                <Link className={"back-link"} to='/dashboard/get'>Get Student Details</Link>
                <Link className={"back-link"} to='/update'>Update Student Details</Link>
                <Link className={"back-link"} to='/delete'>Delete Student</Link>
            </div>
        </div>
    
        
           
        </div>
    );
}

export default Home;
