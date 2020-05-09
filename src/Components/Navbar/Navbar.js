import React from "react";
import './Navbar.css';
import Login from "../Login/Login";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.state= {
            list: [{id: Date.now(), vaule: "Hi"},{id: Date.now(), vaule: "Bye"}]
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-dark bg-dark fixed-top">

                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#bs-example-navbar-collapse-1">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <a className="navbar-brand" href="/">Online Fashion Store</a>
                            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                <ul className="navbar-nav">
                                    <li className="nav-item active">
                                        <a className="nav-link" onClick={console.log("Hi")}>Link <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" onClick={console.log("Hi")}>Link</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" onClick={console.log("Hi")} id="navbarDropdown"
                                           role="button" data-toggle="dropdown" aria-haspopup="true"
                                           aria-expanded="false">
                                            Categories
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">

                                            {this.state.list.map(item => {
                                                return(
                                                    <a className="dropdown-item" onClick={console.log("Hi")}>{item.vaule}</a>
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
                                    <li className="nav-item active">
                                        <a href="/login">Login</a>
                                    </li>
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