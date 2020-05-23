import React from "react";
import './AdminHome.css';
import axios from "axios";
import {toast} from "react-toastify";
import {serverUrl} from "../config"

export default class AdminHome extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            users: [],
            category: []
        }
    }

    componentDidMount() {
        //Fetching all Category Details
        axios.get(serverUrl + '/category/')
            .then(response => {
                this.setState({
                    category: response.data
                })
            })
            .catch((error) => {
                console.log(error);
            })

        //Fetching all user details
        axios.get(serverUrl + '/users/')
            .then(response => {
                this.setState({
                    users: response.data
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteStoreManager(id){
        axios.delete(serverUrl + '/users/'+id)
            .then(response => {
                console.log(response)
                toast("User Deleted");
                setTimeout(() => {
                    window.location = "/admin";
                }, 5000)
            })
    }

    deleteCategory(id){
        axios.delete(serverUrl + '/category/'+id)
            .then(response => {
                console.log(response)
                toast("Category Deleted");
                setTimeout(() => {
                    window.location = "/admin";
                }, 5000)
            })
    }

    render() {
        return(
            <div style={{ marginTop: 55 }}>
                <div className="sidenav" style={{ marginTop: 55 }}>
                    <a href="/admin">Admin Home</a>
                    <a href="/addStoreMng">Add Store Manager</a>
                    <a href="/addCategory">Create Category</a>
                    <a href="/editAdmin">Update My Profile</a>
                </div>

                <div className="main">
                    <h2>Admin Home</h2>
                    <br/>
                    <div style={{"border": "thin solid #000000", "padding": "10px"}}>
                        <h3>Store Managers</h3>
                        <table className="table">
                            <thead className="thead-light">
                            <tr>
                                <th>Username</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Phone No</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.users
                                .filter(item => item['type'] === "storeManager")
                                .map(item => {
                                return(
                                    <tr key={item['_id']}>
                                        <td>{item['username']}</td>
                                        <td>{item['firstName']}</td>
                                        <td>{item['lastName']}</td>
                                        <td>{item['email']}</td>
                                        <td>{item['phoneNo']}</td>
                                        <td><a href={"/editStoreManager/"+item['_id']}>Edit</a></td>
                                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                        <td><a onClick={e => this.deleteStoreManager(item['_id'])} href="#" >Delete</a></td>
                                    </tr>
                                    )
                            })}
                            </tbody>
                        </table>
                        <br/>
                    </div>
                    <br/>
                    <div style={{"border": "thin solid #000000", "padding": "10px"}}>
                        <h3>Category List</h3>
                        <table className="table" >
                            <thead className="thead-light">
                            <tr>
                                <th>Category Name</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.category.map(item => {
                                    return(
                                        <tr key={item['_id']}>
                                            <td>{item['categoryName']}</td>
                                            <td><a href={"/editCategory/"+item['_id']}>Edit</a></td>
                                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                            <td><a onClick={e => this.deleteCategory(item['_id'])} href="#" >Delete</a></td>
                                        </tr>
                                    )
                            })}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        );
    }
}