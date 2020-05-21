import React from "react";
import './Navbar.css';
import axios from 'axios';
import {isLogin, logout} from "../ReactMiddleware/reactAuth";
import {Link} from "react-router-dom";
import {serverUrl, TOKEN_FNAME} from "../config";

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            category: [],
            isLogin: isLogin()
        };
    }

    handleLogout = () => {
        logout();
        this.setState({
            isLogin: false
        })
    }

    componentDidMount() {
        axios.get(serverUrl + '/category/')
            .then(response => {
                this.setState({
                    category: response.data
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">

                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#bs-example-navbar-collapse-1">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <a className="navbar-brand" href="/">Online Fashion Store</a>
                            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                <ul className="navbar-nav">
                                    {/*
                                    <li className="nav-item active">
                                        <a className="nav-link" href="/">Link <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">Link</a>
                                    </li>
                                    */}
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown"
                                           role="button" data-toggle="dropdown" aria-haspopup="true"
                                           aria-expanded="false">
                                            Categories
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">

                                            {this.state.category.map(item => {
                                                return(
                                                    <a className="dropdown-item" href="/" key={item['_id']}>{item['categoryName']}</a>
                                                )
                                            })}
                                        </div>
                                    </li>
                                </ul>
                                <form className="form-inline">
                                    <input className="form-control mr-sm-2" type="text" id="navBarSearchForm"/>
                                    <button className="btn btn-primary my-2 my-sm-0" type="submit">
                                        Search Product
                                    </button>
                                </form>
                                <ul className="navbar-nav ml-md-auto">
                                    <li className="mr-5">
                                        <a href="/productDetails/5ec0c901426bd54270fd6777">details</a>
                                    </li>
                                    <li className="mr-5">
                                        <a href="/wishList">WishList</a>
                                    </li>
                                    <li className="nav-item active">
                                        {this.state.isLogin ? (
                                            <div>
                                                <span className="loged-user-name">{localStorage.getItem(TOKEN_FNAME)} </span>
                                                <Link to='' onClick={() => this.handleLogout()}>Logout</Link>
                                            </div>
                                            )
                                            : <a href="/login">Login</a>
                                        }
                                    </li>
                                    <li className="ml-2">
                                        <a href="/cart">cart</a>
                                    </li>
                                    <br/>
                                    <li className="nav-item dropdown">
                                    </li>

                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}