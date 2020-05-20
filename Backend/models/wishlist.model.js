const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let WishList = new Schema({

    wish_cid: {
        type: String,
    },

    wish_pid: {
            type: String,
        },

    wish_pname: {
        type: String,
    },


    wish_des: {
                type: String,
            },

    wish_price: {
                    type: Number,
                },

    wish_discount: {
                type:Number,
            },

},{
        timestamps: true,
    });

module.exports =mongoose.model('WishList',WishList);