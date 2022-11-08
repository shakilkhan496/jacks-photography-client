import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const PrivateRoutes = ({ children }) => {
    const { user, setLoading, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <div className='flex h-60 justify-center items-center'>

            <h1 className='text-center'> <img className='w-24' src="https://i.gifer.com/ZKZg.gif" alt="" /></h1>
        </div>
    }
    if (user) {
        setLoading(false);
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace ></Navigate>
};

export default PrivateRoutes;

