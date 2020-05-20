import React, {Component} from 'react';
import axios from 'axios';
import TableRow from "./TableRow";
import {TOKEN_ID} from "../config";

export default class Cart extends Component{

    constructor(props) {
        super(props);
        this.state = {
            cart: []
            };
    }

    componentDidMount() {
        console.log(localStorage.getItem(TOKEN_ID));
        axios.get('http://localhost:5000/cart/cartDetails/'+localStorage.getItem(TOKEN_ID))
            .then(response => {
                this.setState({cart: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    tabRow(){
        return this.state.cart.map( function(object,i){
            return <TableRow obj={object} key={i}/>;
        });
    }

        render() {
        return (
            <div>
                <div className="container">
                    <h3 className="text-center mb-5">Shopping Cart</h3>
                    <div className="row">
                        <div className="col-md-12">
                            <table className="table">
                                <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Price</th>
                                    <th>Discount</th>
                                    <th>Quantity</th>
                                    <th>Subtotal</th>
                                    <th>Remove</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.tabRow()}
                                </tbody>
                            </table>
                        </div>
                        <div>
                            <button className="btn btn-primary">Checkout</button>

                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
