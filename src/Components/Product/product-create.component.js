import React, { Component } from "react";
import { Typography, Button, Form, Input } from "antd";
import axios from "axios";
import ProductImageUploadComponent from "./product-imageUpload.component";
import { productBranches } from "./subcomponents/Datas";
import { serverUrl } from "../config";

const { Title} = Typography;
const { TextArea } = Input;

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
    this.onChangeProductBranch = this.onChangeProductBranch.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      productName: "",
      productDes: "",
      productQnt: "",
      images: [],
      productPrice: "",
      productCategory: "",
      productCategories: [],
      productBranch: 1,
    };
  }

  componentDidMount() {
    axios
      .get(serverUrl + "/category")
      .then((response) => {
        if (response.data.length > 0) {
          this.setState({
            productCategories: response.data.map(
              (category) => category.categoryName
            ),
            productCategory: response.data[0].categoryName,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onChangeProductName(e) {
    this.setState({
      productName: e.target.value,
    });
  }

  onChangeProductDes(e) {
    this.setState({
      productDes: e.target.value,
    });
  }

  onChangeProductQnt(e) {
    this.setState({
      productQnt: e.target.value,
    });
  }

  updateFiles(newImages) {
    this.setState({
      images: newImages,
    });
  }

  onChangeProductPrice(e) {
    this.setState({
      productPrice: e.target.value,
    });
  }

  onChangeProductCategory(e) {
    this.setState({
      productCategory: e.target.value,
    });
  }

  onChangeProductBranch(e) {
    this.setState({
      productBranch: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    if (!this.state.productName || !this.state.productDes ||
        !this.state.productQnt || !this.state.images
        || !this.state.productPrice || !this.state.productCategory) {
      return alert('Please fill all the fields')
    }

    const obj = {
      productName: this.state.productName,
      productDes: this.state.productDes,
      productQnt: this.state.productQnt,
      images: this.state.images,
      productPrice: this.state.productPrice,
      productCategory: this.state.productCategory,
      productBranches: this.state.productBranch,
      productDiscount: 0,
    };
    axios
      .post(serverUrl + "/products/add", obj)
      .then((res) => console.log(res.data));

    this.setState({
      productName: "",
      productDes: "",
      productQnt: "",
      productPrice: "",
    });
    this.props.history.push("/storeManager");

  }

  render() {
    return (
      <div
        className="container"
        style={{ maxWidth: "700px", margin: "2rem auto", marginTop: 70 }}
      >
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <Title level={2}>
            {" "}
             Add new product to store
          </Title>
        </div>

        <Form onSubmit={this.onSubmit}>
          {/* DropZone */}
          <ProductImageUploadComponent refreshFunction={this.updateFiles} />

          <br />
          <br />
          <label>Category</label>
          <select
            ref="productCategory"
            required
            className="form-control"
            value={this.state.productCategory}
            onChange={this.onChangeProductCategory}
          >
            {this.state.productCategories.map(function (product) {
              return (
                <option key={product} value={product}>
                  {product}
                </option>
              );
            })}
          </select>
          <br />
          <label>Product Name</label>
          <Input
              required
            onChange={this.onChangeProductName}
            value={this.state.productName}
          />
          <br />
          <br />
          <label>Product Description</label>
          <TextArea
              required
            onChange={this.onChangeProductDes}
            value={this.state.productDes}
          />
          <br />
          <br />
          <label>Price</label>
          <Input
              required
            onChange={this.onChangeProductPrice}
            value={this.state.productPrice}
            type="number"
          />
          <br />
          <br />
          <label>Quantity</label>
          <Input
              required
            onChange={this.onChangeProductQnt}
            value={this.state.productQnt}
            type="number"
          />
          <br />
          <br />
          <label>Branch Name</label>
          <select
            className="form-control"
            required
            value={this.state.productBranch}
            onChange={this.onChangeProductBranch}
          >
            {productBranches.map((item) => (
              <option key={item._id} value={item._id}>
                {item.name}{" "}
              </option>
            ))}
          </select>

          <br />
          <br />
          <Button type="primary" size="large" block onClick={this.onSubmit}>
            Add
          </Button>
        </Form>
      </div>
    );
  }
}

export default ProductCreateComponent;
