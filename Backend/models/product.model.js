const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Define collection and schema for Product
let productSchema = new Schema({
    productName : {
        type : String
    },
    productDes : {
        type : String
    },
    productPrice : {
        type : Number
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model('Product',productSchema);
