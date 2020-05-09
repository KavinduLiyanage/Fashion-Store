import React from "react";
import Navbar from "../Navbar/Navbar";
import './Login.css';
import Axios from "axios";

export default class Login extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            userName: '',
            password: ''
        }
    }

    updateInput(key, value){
        this.setState({
            [key]: value
        });
    }

    onSubmit(e){
        e.preventDefault();
        const users = {
            username: this.state.username,
            password: this.state.password,
        }


    }

    render() {
        return(
            <div className="container">
                <div className="d-flex justify-content-center h-100">
                    <div className="card">
                        <div className="card-header">
                            <h3>Sign In</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={this.onSubmit}>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="username"
                                           value={this.state.userName} onChange={e => this.updateInput("userName",e.target.value)} required/>/>

                                </div>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-key"></i></span>
                                    </div>
                                    <input type="password" className="form-control" placeholder="password"
                                           value={this.state.password} onChange={e => this.updateInput("password",e.target.value)} required/>/>
                                </div>
                                <div className="form-group">
                                    <input type="submit" value="Login" className="btn float-right login_btn"/>
                                </div>
                            </form>
                        </div>
                        <div className="card-footer">
                            <div className="d-flex justify-content-center links">
                                Don't have an account?<a href="/create-acc">Sign Up</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}