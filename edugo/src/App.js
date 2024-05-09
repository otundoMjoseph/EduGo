import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import GetStudent from './GetStudent'; 
import DeleteStudent from './DeleteStudent'
import SubmitStudent from './SubmitStudent'
import UpdateStudent from './UpdateStudent'



function App() {
    return (
        <BrowserRouter>
            <Routes>
              
                <Route path="/home" element={<Home />} />
                <Route path="/" element={<Login />} />
                <Route path="/students" element={<GetStudent />} /> 
                <Route path='/submit' element={<SubmitStudent />} />
                <Route path='/delete' element={<DeleteStudent />} />
                <Route path='/update'  element={<UpdateStudent />}/>
                 
            </Routes>
        </BrowserRouter>
    );
}

export default App;