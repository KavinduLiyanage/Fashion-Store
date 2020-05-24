import React, { Component } from "react";
import axios from "axios";
import { serverUrl } from "../config";
import ImageSlider from "../Product/subcomponents/ImageSlider";
import {Button, Form, Input, Typography} from "antd";

const { Title, Text } = Typography;

class DiscountManageComponent extends Component {
  constructor(props) {
    super(props);
    this.onChangeProductDiscount = this.onChangeProductDiscount.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      productDiscount: "",
      images: [],
      productPrice: ""
    };
  }

  componentDidMount() {
    axios
      .get(serverUrl + "/products/editDis/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          productDiscount: response.data.productDiscount,
          productTitle: response.data.productName,
          images: response.data.images,
          productPrice : response.data.productPrice
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onChangeProductDiscount(e) {
    this.setState({
      productDiscount: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      productDiscount: this.state.productDiscount,
    };

    //post change to put
    axios
      .post(
        serverUrl + "/products/updateDis/" + this.props.match.params.id,
        obj
      )
      .then((res) => console.log(res.data));

    // Redirect to Product List
    window.location='/storeManager';
  }

  render() {
    return (
    <div className="container" style={{  marginTop: 70 }}>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <Title level={2}>
          {" "}
          <Text strong>Manage Product Discount </Text>
        </Title>
      </div>
      <div >
        <div className="row">
          <div className="col-6 col-md-4">
            <ImageSlider images={this.state.images} />
          </div>
          <div className="col-sm-6 col-md-8">
            <Form onSubmit={this.onSubmit}>
              <div >
                <Title level={3}>
                  {" "}
                  <Text disabled> {this.state.productTitle} </Text>
                </Title>
                <Title level={3}>
                  {" "}
                  <Text type="warning"> {`Rs.${this.state.productPrice}.00`} </Text>
                </Title>
              </div>
              <br />
              <label>Discount</label>
              <Input
                  value={this.state.productDiscount}
                  onChange={this.onChangeProductDiscount}
              />
              <br /><br />
              <div>
                <Button type="primary" block onClick={this.onSubmit}>
                  Update Discount
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>

    </div>
    );
  }
}

export default DiscountManageComponent;
