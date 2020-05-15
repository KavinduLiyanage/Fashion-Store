const jwt = require('jsonwebtoken');
const TOKEN_KEY = 'jwt';
const jwtSecret = "sl_myJwtSecret";

export const login = (token,user) => {

    if(!token){
        //res.status(401).json({msg: 'No Token'});
        console.log("No Token");
    }

    try{
        const decoded = jwt.verify(token, jwtSecret);
        localStorage.setItem(TOKEN_KEY, decoded);
        localStorage.setItem('ID', decoded.id);
        localStorage.setItem('firstName', user['firstName']);
        localStorage.setItem('email', user['email']);
        localStorage.setItem('type', user['type']);
        console.log(user);
        //req.user = decoded;
        //next();
    }catch (e) {
        //res.status(400).json({msg: "Token Not Valid"});
        console.log("Token Not Valid");
    }
}

export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem('ID');
    localStorage.removeItem('firstName');
    localStorage.removeItem('email');
    localStorage.removeItem('type');
}

export const isLogin = () => {
    return !!localStorage.getItem(TOKEN_KEY);

}