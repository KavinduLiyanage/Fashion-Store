import React, { Component } from "react";
import axios from "axios";
import { serverUrl, TOKEN_ID } from "../config";

export default class payment extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeNumber = this.onChangeNumber.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeSCode = this.onChangeSCode.bind(this);
    this.onChangezip = this.onChangezip.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      card_Name: "",
      card_Number: "",
      card_expiry: "",
      card_security_code: "",
      zip_code: "",
      payment: [],
    };
  }

  componentDidMount() {
    console.log(localStorage.getItem(TOKEN_ID));
    axios
      .get(serverUrl + "/payment/getDetails" + localStorage.getItem(TOKEN_ID))
      .then((response) => {
        this.setState({ payment: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onChangeName(e) {
    this.setState({
      card_Name: e.target.value,
    });
  }
  onChangeNumber(e) {
    this.setState({
      card_Number: e.target.value,
    });
  }
  onChangeDate(e) {
    this.setState({
      card_expiry: e.target.value,
    });
  }
  onChangeSCode(e) {
    this.setState({
      card_security_code: e.target.value,
    });
  }
  onChangezip(e) {
    this.setState({
      zip_code: e.target.value,
    });
  }

  onSubmit(e) {
    const payData = {
      card_Name: this.state.card_Name,
      card_Number: this.state.card_Number,
      card_expiry: this.state.card_expiry,
      card_security_code: this.state.card_security_code,
      zip_code: this.state.zip_code,
    };

    axios
      .post(serverUrl + "/payment/add", payData)
      .then((response) => {
        console.log(response.data);
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });

    this.setState({
      card_Name: "",
      card_Number: "",
      card_expiry: "",
      card_security_code: "",
      zip_code: "",
    });
  }

  render() {
    return (
      <div>
        <div className="container">
          <h3 className="text-center mb-0">Payment Process</h3>
          <div className="container mt-2 col-sm-5">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label className="exampleFormControlInput1">
                  Payment amount
                </label>
                <input
                  className="form-control col-sm-10"
                  type="text"
                  value=""
                  readOnly
                />
                <label className="exampleFormControlInput1">Name on card</label>
                <input
                  className="form-control col-sm-10"
                  type="text"
                  value={this.state.card_Name}
                  onChange={this.onChangeName}
                />
                <label className="exampleFormControlInput1">Card number</label>
                <input
                  className="form-control col-sm-10"
                  type="text"
                  value={this.state.card_Number}
                  onChange={this.onChangeNumber}
                />
                <label className="exampleFormControlInput1">
                  Card expiry date
                </label>
                <input
                  className="form-control col-sm-10"
                  type="text"
                  value={this.state.card_expiry}
                  onChange={this.onChangeDate}
                />
                <label className="exampleFormControlInput1">
                  Security code
                </label>
                <input
                  className="form-control col-sm-10"
                  type="text"
                  value={this.state.card_security_code}
                  onChange={this.onChangeSCode}
                />
                <label className="exampleFormControlInput1">
                  Zip/Postal code
                </label>
                <input
                  className="form-control col-sm-10"
                  type="text"
                  value={this.state.zip_code}
                  onChange={this.onChangezip}
                />
              </div>
              <div className="form-group text-right">
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Confirm Payment"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
