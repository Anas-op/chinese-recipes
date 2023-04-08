import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Home from '../pages/Home';

const MainRoute = () => {
    return (
        <React.Fragment>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>

        </React.Fragment>
    );
}

export default MainRoute;
