const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//MongoDB Connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true}
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

//Routes
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
app.use('/uploads', express.static('uploads'));
const cartRoutes = require('./routes/cart');
app.use('/cart', cartRoutes);
const paymentRoutes = require('./routes/payment');
app.use('/payment',paymentRoutes);
const commentRouter = require('./routes/comment');
app.use('/comment', commentRouter);

//Production for hosting server
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('../build'));
    app.get('*', (req, res) => {
        res.sendfile(path.resolve(__dirname, 'build', 'index.html'));
    });
}

app.listen(port, () => {
    console.log("Server runs on port : "+ port);
})
