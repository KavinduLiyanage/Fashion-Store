import React from "react";
import './AdminHome.css';
import axios from "axios";

export default class AdminHome extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            users: [],
            category: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/category/')
            .then(response => {
                this.setState({
                    category: response.data
                })
            })
            .catch((error) => {
                console.log(error);
            })
        axios.get('http://localhost:5000/users/')
            .then(response => {
                this.setState({
                    users: response.data
                })
            })
            .catch((error) => {
                console.log(error);
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
                                        <td>Delete</td>
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
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.category.map(item => {
                                    return(
                                        <tr key={item['_id']}>
                                            <td>{item['categoryName']}</td>
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