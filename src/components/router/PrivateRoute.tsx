import { Navigate, Outlet } from "react-router-dom"
import {useContext} from "react"
import { AuthContext } from "../../context/AuthContext"



const PrivateRoute = () => {
  
    const {isAuthenticated} = useContext(AuthContext);
  
    console.log (isAuthenticated);

    if (!isAuthenticated) {
        window.alert ('User has to be logged to navigate to the profile area.');
        console.log ("entra en la alerta.")
        return <Navigate to={'/login'}></Navigate>
    };
  
    return <Outlet/>
};

export default PrivateRoute;