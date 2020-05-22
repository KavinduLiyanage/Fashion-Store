import React, {Component} from 'react';
import axios from 'axios';
import { Typography, Button, Form, Input } from 'antd';
import {serverUrl} from "../config";

const { Title } = Typography;
const { TextArea } = Input;

class ProductEditComponent extends Component {

    constructor(props) {
        super(props);
        this.onChangeProductName = this.onChangeProductName.bind(this);
        this.onChangeProductDes = this.onChangeProductDes.bind(this);
        this.onChangeProductQnt = this.onChangeProductQnt.bind(this);
        this.onChangeProductPrice = this.onChangeProductPrice.bind(this);
        this.onChangeProductCategory = this.onChangeProductCategory.bind(this);
        this.updateFiles = this.updateFiles.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            productName: '',
            productDes: '',
            productQnt: '',
            images: [],
            productPrice: '',
            productCategory: '',
            productCategories: []
        }
    }


    componentDidMount() {
        axios.get(serverUrl+'/products/edit/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    productName: response.data.productName,
                    productDes: response.data.productDes,
                    productQnt: response.data.productQnt,
                    images: response.data.images,
                    productPrice: response.data.productPrice,
                    productCategory: response.data.productCategory
                });

                console.log("Run edit component"+this.props.match.params.id);
            })
            .catch(function (error) {
                console.log(error);
            })

        axios.get(serverUrl+'/category')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        productCategories: response.data.map(category => category.categoryName),
                        productCategory: response.data[0].categoryName
                    })
                }
            })
            .catch((error) => {
                console.log(error);
            })


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
            productCategory: this.state.productCategory
        };

        axios.post(serverUrl+'/products/update/'+ this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        // Redirect to Product List
        this.props.history.push('/storeManager');
        //window.location='/storeManager'
    }

    render() {

        console.log("Render"+this.props.match.params.id);
        return (
            <div style={{maxWidth: '700px', margin: '2rem auto',  marginTop: 70}}>
                <div style={{textAlign: 'center', marginBottom: '2rem'}}>
                    <Title level={2}>Edit Product Details</Title>
                </div>


                <Form onSubmit={this.onSubmit}>
                    <div style={{textAlign: 'center'}}>
                        <Title level={2}>{this.state.productName}</Title>
                    </div>
                    {/* DropZone */}




                    <label>Product Name</label>
                    <Input
                        onChange={this.onChangeProductName}
                        value={this.state.productName}
                    />
                    <br/>
                    <br/>
                    <label>Product Description</label>
                    <TextArea
                        onChange={this.onChangeProductDes}
                        value={this.state.productDes}
                    />
                    <br/>
                    <br/>
                    <label>Price</label>
                    <Input
                        onChange={this.onChangeProductPrice}
                        value={this.state.productPrice}
                        type="number"
                    />
                    <br/>
                    <br/>
                    <label>Quantity</label>
                    <Input
                        onChange={this.onChangeProductQnt}
                        value={this.state.productQnt}
                        type="number"
                    />
                    <br/><br/>
                    <label>Category</label>
                    <select ref="productCategory"
                            required
                            className="form-control"
                            value={this.state.productCategory}
                            onChange={this.onChangeProductCategory}>
                        {
                            this.state.productCategories.map(function(product) {
                                return <option
                                    key={product}
                                    value={product}>{product}
                                </option>;
                            })
                        }
                    </select>
                    <br/>
                    <br/>
                    <div style={{textAlign: 'center'}}>
                        <Button  onClick={this.onSubmit}>Update Details</Button>
                    </div>

                </Form>
            </div>
        );
    }
}

export default ProductEditComponent;
