const jwt = require('jsonwebtoken');

//Authorization Enable Route
function auth(req, res, next) {
    const token = req.header('x-auth-token');

    if(!token){
        res.status(401).json({msg: 'No Token'});
    }

    try{
        const decoded = jwt.verify(token, process.env.jwtSecret);

        req.user = decoded;
        next();
    }catch (e) {
        res.status(400).json({msg: "Token Not Valid"});
    }
}
