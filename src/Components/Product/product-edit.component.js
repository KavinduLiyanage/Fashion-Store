import React, {Component} from 'react';
import axios from 'axios';
import { Typography, Button, Form, Input } from 'antd';
import {serverUrl} from "../config";
import {productBranches} from "./subcomponents/Datas";
import ImageSlider from "./subcomponents/ImageSlider";

const { Title, Text } = Typography;
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
        this.onChangeProductBranches = this.onChangeProductBranches.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            productName: '',
            productDes: '',
            productQnt: '',
            images: [],
            productPrice: '',
            productCategory: '',
            productCategories: [],
            productBranch:''
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
                    productCategory: response.data.productCategory,
                    productTitle: response.data.productName,
                    productBranch: response.data.productBranches
                });
                console.log(this.state.productBranch)

            })
            .catch(function (error) {
                console.log(error);
            })

        axios.get(serverUrl+'/category')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        productCategories: response.data.map(category => category.categoryName)
                    })
                    console.log("productCategories : "+this.state.productCategories);
                    console.log("productCategory : "+this.state.productCategory);
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

    onChangeProductBranches(e) {
        this.setState( {
            productBranch: e.target.value
        });
        console.log(this.state.productBranch);
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
            productBranches: this.state.productBranch
        };

        axios.post(serverUrl+'/products/update/'+ this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        // Redirect to Product List
        this.props.history.push('/storeManager');
        //window.location='/storeManager'
    }

    render() {

        return (
            <div style={{maxWidth: '700px', margin: '2rem auto',  marginTop: 70}}>
                <div style={{textAlign: 'center', marginBottom: '2rem'}}>
                    <Title level={2}> <Text strong> Edit Product Details </Text></Title>
                </div>


                <Form onSubmit={this.onSubmit}>
                    <div style={{textAlign: 'center'}}>
                        <Title level={3}> <Text disabled> {this.state.productTitle} </Text></Title>
                    </div>
                    {/* DropZone */}

                    <ImageSlider images={this.state.images} />


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
                    <label>Branch Name</label>
                    <select ref="productBranches"
                            required
                            className="form-control"
                            value={this.state.productBranch}
                            onChange={this.onChangeProductBranches}>
                        {
                            productBranches.map(function(product) {
                                return <option
                                    key={product._id}
                                    value={product._id}>{product.name}
                                </option>;
                            })
                        }
                    </select>

                    <br/>
                    <br/>
                    <div >
                        <Button type="primary" block onClick={this.onSubmit}>Update Details</Button>
                    </div>

                </Form>
            </div>
        );
    }
}

export default ProductEditComponent;
