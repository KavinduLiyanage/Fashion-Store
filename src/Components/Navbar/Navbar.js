import React from "react";
import './Navbar.css';
import axios from 'axios';
import {isLogin, logout} from "../ReactMiddleware/reactAuth";
import {Link} from "react-router-dom";
import {serverUrl, TOKEN_FNAME, TOKEN_TYPE} from "../config";

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.onChangeSearch = this.onChangeSearch.bind(this);

        this.state = {
            category: [],
            isLogin: isLogin(),
            SearchTerms:''
        };
    }

    handleLogout = () => {
        logout();
        this.setState({
            isLogin: false
        })
    }

    handleNameClick = () => {
        if(localStorage.getItem(TOKEN_TYPE) === 'customer'){
            window.location='/customer'
        } else if(localStorage.getItem(TOKEN_TYPE) === 'admin'){
            window.location='/admin'
        } else if(localStorage.getItem(TOKEN_TYPE) === 'storeManager'){
            window.location='storeManager'
        }
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

    onChangeSearch(e) {
        this.setState( {
            SearchTerms: e.target.value
        });
    }

    handleSearchClick = () => {
        window.location="/storeManager/search/"+this.state.SearchTerms

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
                                    <input className="form-control mr-sm-2" type="text" id="navBarSearchForm" value={this.state.SearchTerms}
                                           onChange={this.onChangeSearch}
                                           placeholder="Search By Typing..."/>
                                    <Link to={"/storeManager/search/"}>
                                        <button className="btn btn-primary my-2 my-sm-0" type="submit" onClick={this.handleSearchClick}>
                                            Search Product
                                        </button>
                                    </Link>

                                </form>
                                <ul className="navbar-nav ml-md-auto">
                                    <li className="ml-2">
                                        {this.state.isLogin && localStorage.getItem(TOKEN_TYPE) === 'customer'? (
                                                <div className="loged-info">
                                                    <a href="/wishList"> WishList </a>
                                                    <a href="/productDetails/5ec0c901426bd54270fd6777"> Details </a>
                                                    <a href="/cart"> Cart </a>
                                                </div>
                                        )
                                            : <span style={{"display": "none"}}> Empty </span>
                                        }
                                        {this.state.isLogin && localStorage.getItem(TOKEN_TYPE) === 'storeManager'? (
                                                <div className="loged-info">

                                                </div>
                                            )
                                            : <span style={{"display": "none"}}> Empty </span>
                                        }
                                    </li>
                                    <li className="nav-item active">
                                        {this.state.isLogin ? (
                                            <div>
                                                <Link to='' className="loged-user-name" onClick={this.handleNameClick}> {localStorage.getItem(TOKEN_FNAME)} </Link>
                                                <Link to='' onClick={() => this.handleLogout()}>Logout</Link>
                                            </div>
                                            )
                                            : <a href="/login">Login</a>
                                        }
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
