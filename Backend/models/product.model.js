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
        type: String
    },
    productPrice : {
        type : Number
    },
    productDiscount : {
        type : Number,
        default: 0
    },
    productDiscountExpire : {
        type : Date
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model('Product',productSchema);
