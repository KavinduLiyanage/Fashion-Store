import React from "react";
import axios from "axios";
import { serverUrl, TOKEN_ID } from "../config";
import TableRow from "../Cart/TableRow";
import WishListTableRow from "../WhishList/WishListTableRow";

//Homepage of a Customer
export default class CustomerHome extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: [],
      cart: [],
    };
  }

  componentDidMount() {
    axios
      .get(serverUrl + "/cart/cartDetails/" + localStorage.getItem(TOKEN_ID))
      .then((response) => {
        this.setState({ cart: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
    axios
      .get(
        serverUrl + "/wish/wishListDetails/" + localStorage.getItem(TOKEN_ID)
      )
      .then((response) => {
        this.setState({ product: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  proTabRow() {
    return this.state.product.map(function (object, i) {
      return <WishListTableRow obj={object} key={i} />;
    });
  }

  tabRow() {
    return this.state.cart.map(function (object, i) {
      return <TableRow obj={object} key={i} />;
    });
  }

  render() {
    return (
      <div className="container" style={{ marginTop: 55 }}>

        <div>
          <h2>Customer Home</h2>
          <br />
          <div style={{ border: "thin solid #000000", padding: "10px" }}>
            <h3>My Wishlist</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th className="text-center">Price </th>
                  <th className="text-center">Discount</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>{this.proTabRow()}</tbody>
            </table>
            <br />
          </div>
          <br />
          <div style={{ border: "thin solid #000000", padding: "10px" }}>
            <h3>My Cart</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
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
        </div>
      </div>
    );
  }
}
