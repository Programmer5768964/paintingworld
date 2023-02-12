import React from 'react';

import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ()=>{
    const auth = localStorage.getItem('user2');
    return auth? <Outlet/> : <Navigate to="/SignUp" />

}

export default PrivateRoute; 