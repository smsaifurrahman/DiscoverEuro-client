import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext) || {};
    const location = useLocation();
    // console.log(location);
    if(loading) {
        return <div className="flex flex-col justify-center items-center"><span className="loading loading-dots loading-lg h-dvh"></span></div>
    }

    if(user){
        return children
    }

    return <Navigate state={location.pathname} to={'/login'} ></Navigate>
    
    
};

export default PrivateRoute;