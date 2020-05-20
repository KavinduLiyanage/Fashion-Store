const mongoose = require('mongoose');
const cartSchema = mongoose.Schema;

let Cart = new cartSchema({
    user_id : {
        type : String
    },
    product_id : {
        type : String
    },
    product_Name : {
        type : String
    },
    product_Description : {
        type : String
    },
    product_quantity : {
        type : Number
    },
    product_Price : {
        type : Number
    },
    product_Discount : {
        type : Number
    }
},{
    timestamps: true,
});

module.exports = mongoose.model('Cart',Cart)
