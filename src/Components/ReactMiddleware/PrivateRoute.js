import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {isLogin} from "./reactAuth";
import {TOKEN_TYPE} from "../config";

const PrivateRoute = ({component: Component, AccessBy, ...rest}) => {
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            isLogin() && localStorage.getItem(TOKEN_TYPE) === AccessBy ?
                <Component {...props} />
                : <Redirect to="/login" />
        )} />
    );
};

export default PrivateRoute;