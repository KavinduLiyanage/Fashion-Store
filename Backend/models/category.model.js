const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Category Model
const categorySchema = new Schema({
    categoryName: {type: String, required: true, unique: true, trim: true},
}, {
    timestamps: true,
});

const Category = mongoose.model('Category', categorySchema);
//EXPORT Category
module.exports = Category;