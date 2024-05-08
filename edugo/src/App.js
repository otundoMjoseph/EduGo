import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import GetStudent from './GetStudent'; 



function App() {
    return (
        <BrowserRouter>
            <Routes>
              
                <Route path="/home" element={<Home />} />
                <Route path="/" element={<Login />} />
                <Route path="/students/:id" element={<GetStudent />} /> 
                 
            </Routes>
        </BrowserRouter>
    );
}

export default App;