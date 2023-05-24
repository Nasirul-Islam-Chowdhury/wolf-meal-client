import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { Navigate, useLocation } from 'react-router-dom';
const PrivateRoute = ({children}) => {
    const navigate = useNavigate();
    const location = useLocation();
    const {user} = useContext(AuthContext);
    if(user){
        return children;
    }
    return <Navigate to='/signin' state={{from:location}} replace > </Navigate>;
};

export default PrivateRoute;