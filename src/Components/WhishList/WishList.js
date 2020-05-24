import React, { Component } from "react";
import axios from "axios";
import WishListTableRow from "./WishListTableRow";
import { TOKEN_ID } from "../config";
import { serverUrl } from "../config";

export default class WishList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
    };
  }

  componentDidMount() {
    console.log(localStorage.getItem(TOKEN_ID));
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

    //window.location.reload();
  }

  render() {
    return (
      <div className="container">
        <h2 className="text-center mb-5"> Wish List</h2>
        <div className="row">
          <div className="col-md-12">
            <table className="table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th className="text-justify">Description</th>
                  <th className="text-center">Price</th>
                  <th className="text-center">Discount</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>{this.proTabRow()}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
