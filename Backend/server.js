const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true}
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const usersRouter = require('./routes/users');
app.use('/users', usersRouter);
const CategoryRouter = require('./routes/category');
app.use('/category',CategoryRouter);
const EmailRouter = require('./routes/mail');
app.use('/mail',EmailRouter);
const productRouter = require('./routes/product.route');
app.use('/products', productRouter);
const ProductDetailsRouter = require('./routes/productDetails');
app.use('/product', ProductDetailsRouter);
const wishRouter = require('./routes/whishlist');
app.use('/wish',wishRouter);

app.listen(port, () => {
    console.log("Server runs on port : "+ port);
})
