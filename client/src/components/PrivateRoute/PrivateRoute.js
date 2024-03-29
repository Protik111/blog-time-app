import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { isAuthenticated, loading } = useSelector(state => state.authReducer)
    return isAuthenticated && !loading ? children : <Navigate to="/login"></Navigate>
};

export default PrivateRoute;