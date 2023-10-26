import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } 
from 'react-router-dom';
import Home from './Components/Pages/HomePage/Home';

function App () {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/home' element={<Home/>}/>
            </Routes>
        </Router>
    );
}

export default App;