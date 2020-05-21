import React, {Component} from 'react';
import axios from 'axios';
import { Typography, Button, Form, message, Input, Icon } from 'antd';

const { Title } = Typography;
const { TextArea } = Input;

const Category = [
    { key: 1, value: "Men" },
    { key: 2, value: "Women" },
    { key: 3, value: "Kids" },
    { key: 4, value: "Beauty" },
    { key: 5, value: "Gifts" },
    { key: 6, value: "HomeStop" }
]

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
            productCategory: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/products/edit/'+this.props.match.params.id)
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

        //post change to put
        axios.post('http://localhost:5000/products/update/'+ this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        // Redirect to Product List
        this.props.history.push('/storeManager');
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
                    <label>Price($)</label>
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
                    <select onChange={this.onChangeProductCategory} >
                        {Category.map(item => (
                            <option key={item.key} value={item.key}>{item.value} </option>
                        ))}
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
