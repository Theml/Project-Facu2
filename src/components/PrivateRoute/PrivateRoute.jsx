import { Redirect, Route } from "react-router-dom/cjs/react-router-dom";
import { useAuth } from "../AuthContext/AuthContext";

export const PrivateRoute = ({component: Component, ...rest}) =>{

    const {user} = useAuth();

    return(
        <Route
            {...rest}
            render={(props) =>
                user ? <Component {...props}/> : <Redirect to="/login" />
            }
        />
    )
}
   