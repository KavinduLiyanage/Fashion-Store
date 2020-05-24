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
      this.state.Discount = this.props.obj.productDiscount+"%";
    }
  }

  delete() {
    axios
      .get(serverUrl + "/products/delete/" + this.props.obj._id)
      .then(console.log("Deleted"))
      .catch((err) => console.log(err));
      window.location='/storeManager/list'
  }

  render() {
    return (
      <tr>
        <td>{this.props.obj.productName}</td>
        <td className="text-center">{this.props.obj.productQnt}</td>
        <td className="text-center">Rs.{this.props.obj.productPrice}.00</td>
        <td className="text-center">{this.state.Discount}</td>
          <td>
              <Link
                  to={"/storeManager/edit/" + this.props.obj._id}
                  className="btn btn-outline-dark btn-sm"
              >
                  Edit
              </Link>
          </td>
        <td >
          <Link
            to={"/storeManager/editDis/" + this.props.obj._id}
            className="btn btn-outline-dark btn-sm"
          >
            Manage Discount
          </Link>
        </td>

        <td>
          <button onClick={this.delete} className="btn btn-outline-danger btn-sm">
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default TableRowComponent;
