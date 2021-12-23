import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const AdminRoute = ({ children }) => {
    const { user, admin, isLoading } = useAuth();
    let location = useLocation();
    if (isLoading) {
        return <Spinner animation="border" variant="warning" />
    }
    if (user.email && admin) {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} />;
};

export default AdminRoute;