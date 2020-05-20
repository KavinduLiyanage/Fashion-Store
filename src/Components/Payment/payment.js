import React, {Component} from "react";
import axios from 'axios';

export default class payment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            payment: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/payment/getDetails')
            .then(response => {
                this.setState({payment: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <h3>Payment Process</h3>
                            <table className="table">
                                <thead>
                                <tr>
                                    <th>total</th>
                                    <th>Remove</th>
                                </tr>
                                </thead>
                                <tbody>
                                    <td>8657</td>
                                    <td><button className="btn btn-primary">X</button></td>
                                </tbody>
                            </table>
                            <div>
                                <button className="btn btn-primary">Clear Cart</button>
                                <button className="btn btn-primary">Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}