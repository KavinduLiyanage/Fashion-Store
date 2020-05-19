import {jwtSecret,TOKEN_KEY,TOKEN_ID,TOKEN_FNAME,TOKEN_EMAIL,TOKEN_TYPE} from "../config";

const jwt = require('jsonwebtoken');

export const login = (token,user) => {

    if(!token){
        console.log("No Token");
    }

    try{
        const decoded = jwt.verify(token, jwtSecret);
        localStorage.setItem(TOKEN_KEY, decoded);
        localStorage.setItem(TOKEN_ID, decoded.id);
        localStorage.setItem(TOKEN_FNAME, user['firstName']);
        localStorage.setItem(TOKEN_EMAIL, user['email']);
        localStorage.setItem(TOKEN_TYPE, user['type']);
        console.log(user);
    }catch (e) {
        console.log("Token Not Valid");
    }
}

export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(TOKEN_ID);
    localStorage.removeItem(TOKEN_FNAME);
    localStorage.removeItem(TOKEN_EMAIL);
    localStorage.removeItem(TOKEN_TYPE);
}

export const isLogin = () => {
    return !!localStorage.getItem(TOKEN_KEY);

}