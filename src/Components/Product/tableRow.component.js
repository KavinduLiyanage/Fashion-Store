import React, {Component} from 'react';

import {Link} from 'react-router-dom';

import axios from 'axios';

class TableRowComponent extends Component {

    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.get('http://localhost:5000/products/delete/'+this.props.obj._id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
    }


    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.productName}
                </td>
                <td>
                    {this.props.obj.productDes}
                </td>
                <td>
                    {this.props.obj.productPrice}
                </td>
                <td>
                    <Link to={"/storeManager/edit/"+this.props.obj._id} className="btn btn-primary">Edit</Link>
                </td>
                <td>
                    <button onClick={this.delete} className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
    }
}

export default TableRowComponent;
