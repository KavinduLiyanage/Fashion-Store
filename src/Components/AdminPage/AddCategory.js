import React from "react";
import './AddCategory.css';
import axios from "axios";
import {toast} from "react-toastify";

export default class AddCategory extends React.Component{

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            categoryName: ""
        }
    }

    updateInput(key, value){
        this.setState({
            [key]: value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const category = {
            categoryName: this.state.categoryName
        }

        axios.post('http://localhost:5000/category/add', category)
            .then(response => {
                console.log(response)
                toast("Category Added");
                this.setState({
                    categoryName: ""
                })
            })
            .catch(error => {
                console.log(error.response)
                toast("Category Exists");
                this.setState({
                    categoryName: '',
                })
            });
    }

    render() {
        return(
            <div style={{ marginTop: 55 }}>
                <div className="sidenav" style={{ marginTop: 55 }}>
                    <a href="/admin">Admin Home</a>
                    <a href="/addStoreMng">Add Store Manager</a>
                    <a href="/addCategory">Create Category</a>
                </div>

                <div className="main">
                    <div className="container">
                        <div className="d-flex justify-content-center h-100">
                            <div className="card">
                                <div className="card-header">
                                    <h3>Create Category</h3>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={this.onSubmit}>
                                        <label className="control-label">Category Name</label>
                                        <div className="input-group form-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="fas fa-list" /></span>
                                            </div>
                                            <input type="text" className="form-control" placeholder="Category Name"
                                                   value={this.state.categoryName} onChange={e => this.updateInput("categoryName",e.target.value)} required/>
                                        </div>
                                        <button type="submit" className="btn float-right reg-btn">Create Category</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}