import React, { Component } from "react";
import axios from "axios";
import TableRow from "./TableRow";
import { serverUrl, TOKEN_ID } from "../config";
import { Link } from "react-router-dom";

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      cart: [],
    };
  }

  componentDidMount() {
    console.log(localStorage.getItem(TOKEN_ID));
    axios
      .get(serverUrl + "/cart/cartDetails/" + localStorage.getItem(TOKEN_ID))
      .then((response) => {
        this.setState({ cart: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  tabRow() {
    return this.state.cart.map(function (object, i) {
      return <TableRow obj={object} key={i} />;
    });
  }
  render() {
    return (
      <div>
        <div className="container">
          <h3 className="text-center mb-4">Shopping Cart</h3>
          <div className="row">
            <div className="col-md-12">
              <table className="table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Discount</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>{this.tabRow()}</tbody>
              </table>
            </div>
            <div className="container mt-0">
              <h5 className="text-right mb-2 col-sm-10">
                Total : {this.state.total}
              </h5>
            </div>
            <div className="container mt-0 text-right">
              <Link to="/payment" className="btn btn-primary mb-10">
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
