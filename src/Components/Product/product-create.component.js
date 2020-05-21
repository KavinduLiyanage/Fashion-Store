import React, {Component} from 'react';
import axios from 'axios';
import ProductImageUploadComponent from "./product-imageUpload.component";

const Category = [
    { key: 1, value: "Men" },
    { key: 2, value: "Women" },
    { key: 3, value: "Kids" },
    { key: 4, value: "Beauty" },
    { key: 5, value: "Gifts" },
    { key: 6, value: "HomeStop" }
]

class ProductCreateComponent extends Component {

    constructor(props) {
        super(props);

        // Setting up functions
        this.onChangeProductName = this.onChangeProductName.bind(this);
        this.onChangeProductDes = this.onChangeProductDes.bind(this);
        this.onChangeProductQnt = this.onChangeProductQnt.bind(this);
        this.updateFiles = this.updateFiles.bind(this);
        this.onChangeProductPrice = this.onChangeProductPrice.bind(this);
        this.onChangeProductCategory = this.onChangeProductCategory.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        // Setting up state
        this.state = {
            productName: '',
            productDes: '',
            productQnt: '',
            images: [],
            productPrice: '',
            productCategory: ''
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

    onChangeProductQnt(e) {
        this.setState( {
            productQnt: e.target.value
        });
    }

    updateFiles(newImages) {
        this.setState( {
            images: newImages
        });
    }

    onChangeProductPrice(e) {
        this.setState( {
            productPrice: e.target.value
        });
    }

    onChangeProductCategory(e) {
        this.setState( {
            productCategory: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            productName: this.state.productName,
            productDes: this.state.productDes,
            productQnt: this.state.productQnt,
            images: this.state.images,
            productPrice: this.state.productPrice,
            productCategory: this.state.productCategory,
            productDiscount: 0
        };
        axios.post('http://localhost:5000/products/add', obj)
            .then(res => console.log(res.data));

        this.setState( {
            productName: '',
            productDes: '',
            productQnt: '',
            productPrice: ''
        })
        this.props.history.push('/storeManager');
    }

    render() {
        return (
            <div style={{maxWidth: '700px', margin: '2rem auto'}}>
                <div style={{textAlign: 'center', marginBottom: '2rem'}}>
                    <h2 level={2}> Upload Travel Product</h2>
                </div>


                <form onSubmit={this.onSubmit}>

                    {/* DropZone */}
                    <ProductImageUploadComponent refreshFunction={this.updateFiles}/>


                    <br/>
                    <br/>
                    <label>Product Name</label>
                    <input
                        onChange={this.onChangeProductName}
                        value={this.state.productName}
                    />
                    <br/>
                    <br/>
                    <label>Product Description</label>
                    <textarea
                        onChange={this.onChangeProductDes}
                        value={this.state.productDes}
                    />
                    <br/>
                    <br/>
                    <label>Price($)</label>
                    <input
                        onChange={this.onChangeProductPrice}
                        value={this.state.productPrice}
                        type="number"
                    />
                    <br/>
                    <br/>
                    <label>Quantity</label>
                    <input
                        onChange={this.onChangeProductQnt}
                        value={this.state.productQnt}
                        type="number"
                    />
                    <br/><br/>
                    <label>Category</label>
                    <select onChange={this.onChangeProductCategory} >
                        {Category.map(item => (
                            <option key={item.key} value={item.key}>{item.value} </option>
                        ))}
                    </select>
                    <br/>
                    <br/>

                    <button
                        onClick={this.onSubmit}
                    >
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default ProductCreateComponent;
