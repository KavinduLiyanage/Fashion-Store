import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLogin } from "./reactAuth";
import { TOKEN_TYPE } from "../config";

//All the private route Management
/*
Component - Component which should redirect to
AccessBy - 'User has access to that component' Only that user can access that relevant route
...rest contain path if user logged in to system and token type is equal to
    AccessBy that relevant component will be displayed otherwise redirect to Login
*/

const PrivateRoute = ({ component: Component, AccessBy, ...rest }) => {
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /login page
    <Route
      {...rest}
      render={(props) =>
        isLogin() && localStorage.getItem(TOKEN_TYPE) === AccessBy ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
