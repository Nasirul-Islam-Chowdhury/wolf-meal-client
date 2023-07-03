import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
const PrivateRoute = ({children}) => {

    const location = useLocation();
    const {user, loading} = useContext(AuthContext);
    if(user){
        return children;
    }
    if(loading){
        return  <div className='flex justify-center min-h-screen'>
         <span className="loading loading-bars loading-lg"></span>
        </div>
      }
    return <Navigate to='/signin' state={{from:location}} replace > </Navigate>;
};

export default PrivateRoute;