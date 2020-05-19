const CryptoJS = require("crypto-js");
const bytes  = CryptoJS.AES.decrypt('U2FsdGVkX1+rTsyObhpTnfIp5/z1/kRoBgYMzZUIZAevi/jqCnulADuUahzvhfv0', process.env.jwtSecret);
export const email = "milindaranawaka2@gmail.com"
export const password = bytes.toString(CryptoJS.enc.Utf8);