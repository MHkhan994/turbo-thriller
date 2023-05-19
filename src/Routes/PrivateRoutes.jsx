import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import SyncLoader from "react-spinners/SyncLoader";

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const loaction = useLocation()

    if (loading) {
        return (
            <div className='h-[80vh] flex justify-center items-center'>
                <SyncLoader
                    color={'#004485'}
                    loading={loading}
                    size={10}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
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