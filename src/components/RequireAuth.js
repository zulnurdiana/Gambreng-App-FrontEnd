import { useContext } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import AuthContext from "../contexts/AuthProvider";

const RequireAuth = ({ 
        adminOnly = false
    }) => {
    const { auth } = useContext(AuthContext);
    const location = useLocation();
    
    if(!auth)
        return (<Navigate to="/signin" state={{ from: location }} replace />)

    if(adminOnly)
        if(auth.isAdmin) return (<Outlet/>)
        else return (<Navigate to="/" state={{ from: location }} replace />)
    
    return (<Outlet/>)
}

export default RequireAuth;