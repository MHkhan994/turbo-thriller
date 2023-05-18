import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const loaction = useLocation()

    if (loading) {
        return (
            <div>
                <progress className="progress w-56"></progress>
            </div>
        )
    }
    else if (user) {
        return children
    }
    else {
        Swal.fire('Please login to visit this Page')
        return (
            < Navigate to='/login' state={{ from: loaction }}></ Navigate>
        )
    }
};

export default PrivateRoutes;