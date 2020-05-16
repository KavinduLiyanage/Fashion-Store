const nodemailer = require("nodemailer");
const router = require('express').Router();
const CryptoJS = require("crypto-js");
const bytes  = CryptoJS.AES.decrypt('U2FsdGVkX1+rTsyObhpTnfIp5/z1/kRoBgYMzZUIZAevi/jqCnulADuUahzvhfv0', process.env.jwtSecret);
const plaintext = bytes.toString(CryptoJS.enc.Utf8);

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'milindaranawaka2@gmail.com',
        pass: plaintext
        //Todo Password Check
    },
    tls: {
        rejectUnauthorized: false
    },
});

router.route('/').post((req, res) => {
    transporter.sendMail({
        from: 'milindaranawaka2@gmail.com',
        to: req.body.email,
        subject: 'Your Fashion Store Account is created',
        text: `Hello, ` + req.body.firstName + ` Fashion Store account has been created as Store Manager
        
                User Below informations to access your Account
                
                Username: ` + req.body.username +`
                Email: ` + req.body.email +`
                Password: ` + req.body.password +`
                
                Thank You`
    }, function(error, info){
        if (error) {
            res.status(404)
            res.json(error);
        } else {
            res.json('Email sent: ' + info.response);
        }
    });
});

module.exports = router;