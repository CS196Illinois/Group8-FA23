import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } 
from 'react-router-dom';
import Home from './Components/Pages/HomePage/Home';
import Trending from './Components/Pages/TrendingPage/Trending';

function App () {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/home' element={<Home/>}/>
                <Route path='/trending-stocks' element={<Trending/>}/>
            </Routes>
        </Router>
    );
}

export default App;