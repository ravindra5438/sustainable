import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Auth from '../pages/Auth';
// import Dashboard from '../pages/Dashboard';

const ProjectRoutes = () => {
    return (
        <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/auth" element={<Auth/>} />
            {/* <Route path="/dashboard" element={<Dashboard/>} /> */}
        </Routes>
    );
};

export default ProjectRoutes;
