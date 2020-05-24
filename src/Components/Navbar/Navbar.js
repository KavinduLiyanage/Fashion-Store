import React from "react";
import "./Navbar.css";
import axios from "axios";
import { isLogin, logout } from "../ReactMiddleware/reactAuth";
import { Link } from "react-router-dom";
import { serverUrl, TOKEN_FNAME, TOKEN_TYPE } from "../config";
import { Menu, Dropdown ,Typography } from 'antd';
import { CaretDownOutlined} from '@ant-design/icons';
const { Text } = Typography;

const storemanagermenu = (
    <Menu>
      <Menu.Item key="0">
        <a href="/storeManager">Store Home</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="/storeManager/create">Add Product</a>
      </Menu.Item>
      <Menu.Item key="2">
        <a href="/storeManager/list">Product List</a>
      </Menu.Item>
    </Menu>
);
//Header of the System.
//The same Navbar reuse for all components and users
//Nabar content will be different according to user logged in Type
export default class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeSearch = this.onChangeSearch.bind(this);
    this.onChangeCat = this.onChangeCat.bind(this);

    this.state = {
      category: [],
      isLogin: isLogin(),
      SearchTerms: "",
      linkTo: "",
      cat: "",
    };
  }

  handleLogout = () => {
    logout();
    this.setState({
      isLogin: false,
    });
  };

  handleNameClick = () => {
    if (localStorage.getItem(TOKEN_TYPE) === "customer") {
      window.location = "/customer";
    } else if (localStorage.getItem(TOKEN_TYPE) === "admin") {
      window.location = "/admin";
    } else if (localStorage.getItem(TOKEN_TYPE) === "storeManager") {
      window.location = "/storeManager";
    }
  };

  componentDidMount() {
    axios
      .get(serverUrl + "/category/")
      .then((response) => {
        this.setState({
          category: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onChangeSearch(e) {
    this.setState({
      SearchTerms: e.target.value,
    });
  }

  onChangeCat(e) {
    this.setState({
      cat: e.target.value,
    });
  }

  handleSearchClick = () => {
    if (localStorage.getItem(TOKEN_TYPE) === "customer") {
      this.setState({
        linkTo: "/search/:id",
      });
      window.location = "/search/" + this.state.SearchTerms;
    } else if (localStorage.getItem(TOKEN_TYPE) === "admin") {
      this.setState({
        linkTo: "/admin",
      });
      window.location = "/search/" + this.state.SearchTerms;
    } else if (localStorage.getItem(TOKEN_TYPE) === "storeManager") {
      this.setState({
        linkTo: "/storeManager",
      });
      window.location = "/storeManager/search/" + this.state.SearchTerms;
    } else {
      this.setState({
        linkTo: "/search",
      });
      window.location = "/search/" + this.state.SearchTerms;
    }
    console.log("handle click : " + this.state.linkTo);
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <a className="navbar-brand" href="/">
                Online Fashion Store
              </a>
              <div
                className="collapse navbar-collapse"
                id="bs-example-navbar-collapse-1"
              >
                <ul className="navbar-nav">

                                    <li className="nav-item active">
                                        <a className="nav-link" href="/allProducts">All Products <span className="sr-only">(current)</span></a>
                                    </li>
                  {/*
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">Link</a>
                                    </li>
                                    onClick={this.handleCategoryClick(item.categoryName)} onChange={this.onChangeCat}
                                    */}
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="/"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Categories
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      {this.state.category.map((item) => {
                        return (
                          <a
                            className="dropdown-item"
                            href={"/search/" + item["categoryName"]}
                            key={item["_id"]}
                          >
                            {item["categoryName"]}
                          </a>
                        );
                      })}
                    </div>
                  </li>
                </ul>
                <form className="form-inline">
                  <input
                    className="form-control mr-sm-2"
                    type="text"
                    id="navBarSearchForm"
                    value={this.state.SearchTerms}
                    onChange={this.onChangeSearch}
                    placeholder="Search in Store"
                  />
                  <Link to={""}>
                    <button
                      className="btn btn-primary my-2 my-sm-0"
                      type="submit"
                      onClick={this.handleSearchClick}
                    >
                      Search Product
                    </button>
                  </Link>
                </form>
                <ul className="navbar-nav ml-md-auto">
                  <li className="ml-2">
                    {this.state.isLogin &&
                    localStorage.getItem(TOKEN_TYPE) === "customer" ? (
                      <div className="loged-info">
                        <a href="/wishList"> Wish List </a>
                        <a href="/cart">
                          {" "}
                          <i className="fas fa-cart-plus cart-icon"></i>{" "}
                        </a>
                      </div>
                    ) : (
                      <span style={{ display: "none" }}> Empty </span>
                    )}
                    {this.state.isLogin &&
                    localStorage.getItem(TOKEN_TYPE) === "storeManager" ? (
                      <div className="loged-info">
                        <Dropdown overlay={storemanagermenu}>
                          <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            <Text type="warning">Manage Product<CaretDownOutlined /></Text>

                          </a>
                        </Dropdown>
                      </div>


                    ) : (
                      <span style={{ display: "none" }}> Empty </span>
                    )}
                  </li>
                  <li className="nav-item active">
                    {this.state.isLogin ? (
                      <div>
                        <Link
                          to=""
                          className="loged-user-name"
                          onClick={this.handleNameClick}
                        >
                          {" "}
                          {localStorage.getItem(TOKEN_FNAME)}{" "}
                        </Link>
                        <Link to="" onClick={() => this.handleLogout()}>
                          Logout
                        </Link>
                      </div>
                    ) : (
                      <a href="/login">Login</a>
                    )}
                  </li>
                  <br />
                  <li className="nav-item dropdown"></li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}
