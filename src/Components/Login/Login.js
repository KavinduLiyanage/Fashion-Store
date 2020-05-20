import React from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';
import axios from "axios";


toast.configure();
export default class Login extends React.Component{

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            email: '',
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
            email: this.state.email,
            password: this.state.password
        }

        axios.post('http://localhost:5000/users/',users)
            .then(response => {
                console.log(response)
                const userType = response.data.user['type'];
                if(userType === 'customer'){
                    toast("Customer Login In Successful");
                } else if(userType === 'admin'){
                    toast("Admin Login In Successful");
                } else if(userType === 'storeManager'){
                    toast("Store Manager Login In Successful");
                }
            })
            .catch(error => {
                console.log(error.response)
                toast("Please Check Email or Password");
                this.setState({
                    password: ''
                })
            });

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
                                        <span className="input-group-text"><i className="fas fa-at" /></span>
                                    </div>
                                    <input type="email" className="form-control" placeholder="Email"
                                           value={this.state.email} onChange={e => this.updateInput("email",e.target.value)} required/>

                                </div>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-key"></i></span>
                                    </div>
                                    <input type="password" className="form-control" placeholder="password"
                                           value={this.state.password} onChange={e => this.updateInput("password",e.target.value)} required/>
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