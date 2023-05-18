import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext)

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
    Swal.fire('Please login to see myToys')
    return (
        < Navigate to='/login' ></ Navigate>
    )
};

export default PrivateRoutes;