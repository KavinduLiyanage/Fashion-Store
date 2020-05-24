import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { serverUrl } from "../config";

class TableRowComponent extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);

    this.state = {
      Discount: "",
    };

    if (this.props.obj.productDiscount === 0) {
      this.state.Discount = "No discount";
    } else {
      this.state.Discount = this.props.obj.productDiscount;
    }
  }
  delete() {
    axios
      .get(serverUrl + "/products/delete/" + this.props.obj._id)
      .then(console.log("Deleted"))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <tr>
        <td>{this.props.obj.productName}</td>
        <td>{this.props.obj.productDes}</td>
        <td>{this.props.obj.productPrice}</td>
        <td>{this.state.Discount}</td>
        <td>
          <Link
            to={"/storeManager/editDis/" + this.props.obj._id}
            className="btn btn-success"
          >
            Manage Discount
          </Link>
        </td>
        <td>
          <Link
            to={"/storeManager/edit/" + this.props.obj._id}
            className="btn btn-primary"
          >
            Edit
          </Link>
        </td>
        <td>
          <button onClick={this.delete} className="btn btn-danger">
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default TableRowComponent;
