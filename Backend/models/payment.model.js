const mongoose = require('mongoose');
const PaymentSchema = mongoose.Schema;

let Payment = new PaymentSchema({
    total : {
        type : Number
    },
    card_Name : {
        type : String
    },
    card_Number : {
        type : Number
    },
    card_expiry : {
        type : Date
    },
    card_security_code : {
        type : Number
    },
    zip_code : {
        type : Number
    }
},{
    timestamps: true,
});

module.exports = mongoose.model('Payment',Payment)