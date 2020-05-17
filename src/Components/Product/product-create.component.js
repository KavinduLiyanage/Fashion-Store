import React, {Component} from 'react';

import axios from 'axios';

class ProductCreateComponent extends Component {

    constructor(props) {
        super(props);

        // Setting up functions
        this.onChangeProductName = this.onChangeProductName.bind(this);
        this.onChangeProductDes = this.onChangeProductDes.bind(this);
        this.onChangeProductPrice = this.onChangeProductPrice.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        // Setting up state
        this.state = {
            productName: '',
            productDes: '',
            productPrice: ''
        }
    }

    onChangeProductName(e) {
        this.setState( {
            productName: e.target.value
        });
    }

    onChangeProductDes(e) {
        this.setState( {
            productDes: e.target.value
        });
    }

    onChangeProductPrice(e) {
        this.setState( {
            productPrice: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            productName: this.state.productName,
            productDes: this.state.productDes,
            productPrice: this.state.productPrice,
            productDiscount: 0
        };
        axios.post('http://localhost:5000/products/add', obj)
            .then(res => console.log(res.data));

        this.setState( {
            productName: '',
            productDes: '',
            productPrice: ''
        })
        this.props.history.push('/storeManager/list');
    }

    render() {
        return (
            <div className="container" style={{marginTop: 100}}>
                <h3>Add New Product</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Product Name</label>
                        <input type="text" className="form-control" value={this.state.productName} onChange={this.onChangeProductName}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Product Description</label>
                        <input type="text" className="form-control" value={this.state.productDes} onChange={this.onChangeProductDes}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Product Price</label>
                        <input type="text" className="form-control" value={this.state.productPrice} onChange={this.onChangeProductPrice}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Product" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default ProductCreateComponent;
