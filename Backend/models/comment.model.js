const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Comment = new Schema({

    comment_cid: {
        type: String,

    },

    comment_pid: {
        type: String,
    },

    comment_uname:{
        type:String,

    },

    comment_des: {
        type: String,
        required: true,

    },


},{
    timestamps: true,
});

module.exports =mongoose.model('Comment',Comment);