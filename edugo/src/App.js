import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import GetStudent from './GetStudent'; 
import Navbar from './NavBar.js'
// ... other imports

function App() {
    return (
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Navbar />} />
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/students/:id" element={<GetStudent />} /> 
                {/* ... other routes */} 
            </Routes>
        </BrowserRouter>
    );
}

export default App;