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
    productQnt : {
        type : String
    },
    images: {
        type: Array,
        default: []
    },
    productCategory: {
        type: Number,
        default: 1
    },
    productPrice : {
        type : Number
    },
    productDiscount : {
        type : Number
    },
    productDiscountExpire : {
        type : Date
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model('Product',productSchema);
