import React, { Component } from "react";

import axios from "axios";
import { serverUrl } from "../config";

class DiscountManageComponent extends Component {
  constructor(props) {
    super(props);
    this.onChangeProductDiscount = this.onChangeProductDiscount.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      productDiscount: "",
    };
  }

  componentDidMount() {
    axios
      .get(serverUrl + "/products/editDis/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          productDiscount: response.data.productDiscount,
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
    this.props.history.push("/storeManager");
  }

  render() {
    return (
      <div className="container" style={{ marginTop: 100 }}>
        <p>welcome to discount edit component</p>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Discount</label>
            <input
              type="text"
              className="form-control"
              value={this.state.productDiscount}
              onChange={this.onChangeProductDiscount}
            />
          </div>

          <div className="form-group">
            <input type="submit" value="Update" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}

export default DiscountManageComponent;
