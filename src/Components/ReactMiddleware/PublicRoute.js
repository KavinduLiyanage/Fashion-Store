import React from 'react';
import { Route} from 'react-router-dom';
import {isLogin} from "./reactAuth";
import {TOKEN_TYPE} from "../config";

const RedirectTo = () => {
    const userType = (localStorage.getItem(TOKEN_TYPE));
    if(userType === 'customer'){
        window.location='/customer'
    } else if(userType === 'admin'){
        window.location='/admin'
    } else if(userType === 'storeManager'){
        window.location='/storeManager'
    }
}

const PublicRoute = ({component: Component, restricted, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            isLogin() && restricted ?
               <RedirectTo/>
                : <Component {...props} />
        )} />
    );
};

export default PublicRoute;