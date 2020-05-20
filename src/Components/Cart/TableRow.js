import React, {Component} from 'react';
import axios from "axios";
import {TOKEN_ID} from "../config";

class TableRow extends Component {

    constructor(props) {
        super(props);
        this.state = {
            click:1,
            show:true,
            total:0,
        };
    }

    IncrementCount = () => {
        this.setState({click: this.state.click + 1});
    }
    DecreaseCount = () => {
        this.setState({click: this.state.click - 1});
    }

    calculateTotal(product_id){
        //this.state.click * this.props.obj.product_Price
    }

    delete(pid){
        axios.delete('http://localhost:5000/cart/delete/'+localStorage.getItem(TOKEN_ID)+'/'+pid)
            .then(response=>{
                console.log(response.data);
                window.location.reload();
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.product_Name}
                </td>
                <td>
                    {this.props.obj.product_Description}
                </td>
                <td>
                    {this.props.obj.product_Price}
                </td>
                <td>
                    {this.props.obj.product_Discount}
                </td>
                <td className="btn-group" >
                    <button className="btn btn-primary btn-sm mr-3" onClick={this.DecreaseCount}>-</button>
                    {this.state.show ? <h5>{this.state.click}</h5> :'' }
                    <button className="btn btn-primary btn-sm ml-3" onClick={this.IncrementCount}>+</button>
                </td>
                <td>

                </td>
                <td>
                    <button className="btn btn-primary" onClick={()=>this.delete(this.props.obj.product_id)}>X</button>
                </td>
            </tr>
        );
    }
}
export default TableRow;