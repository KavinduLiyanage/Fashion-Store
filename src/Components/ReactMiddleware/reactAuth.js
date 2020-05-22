import {
    jwtSecret,
    TOKEN_KEY,
    TOKEN_ID,
    TOKEN_FNAME,
    TOKEN_EMAIL,
    TOKEN_TYPE,
    TOKEN_LNAME,
    TOKEN_UNAME, TOKEN_PHONENO, TOKEN_ADDRESS, TOKEN_GENDER
} from "../config";

const jwt = require('jsonwebtoken');

export const login = (token,user) => {

    if(!token){
        console.log("No Token");
    }

    try{
        const decoded = jwt.verify(token, jwtSecret);
        localStorage.setItem(TOKEN_KEY, decoded);
        localStorage.setItem(TOKEN_ID, decoded.id);
        localStorage.setItem(TOKEN_FNAME, user[TOKEN_FNAME]);
        localStorage.setItem(TOKEN_LNAME, user[TOKEN_LNAME]);
        localStorage.setItem(TOKEN_UNAME, user[TOKEN_UNAME]);
        localStorage.setItem(TOKEN_EMAIL, user[TOKEN_EMAIL]);
        localStorage.setItem(TOKEN_PHONENO, user[TOKEN_PHONENO]);
        localStorage.setItem(TOKEN_ADDRESS, user[TOKEN_ADDRESS]);
        localStorage.setItem(TOKEN_GENDER, user[TOKEN_GENDER]);
        localStorage.setItem(TOKEN_TYPE, user[TOKEN_TYPE]);
        console.log(user);
    }catch (e) {
        console.log("Token Not Valid");
    }
}

export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(TOKEN_ID);
    localStorage.removeItem(TOKEN_FNAME);
    localStorage.removeItem(TOKEN_LNAME);
    localStorage.removeItem(TOKEN_UNAME);
    localStorage.removeItem(TOKEN_EMAIL);
    localStorage.removeItem(TOKEN_PHONENO);
    localStorage.removeItem(TOKEN_ADDRESS);
    localStorage.removeItem(TOKEN_GENDER);
    localStorage.removeItem(TOKEN_TYPE);
}

export const isLogin = () => {
    return !!localStorage.getItem(TOKEN_KEY);

}