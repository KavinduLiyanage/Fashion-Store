import React, {Component} from 'react';
import axios from 'axios';
//import {Link} from 'react-router-dom';
import {TOKEN_ID} from "../config";

class WishListTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteItem = this.deleteItem.bind(this);
        this.state = {

            user_id :'',
            product_id :'',
            product_Name:'',
            product_Description :'',
            product_Price:'',
            product_Discount:''



        }

    }

    deleteItem(pid){
        //+localStorage.getItem('token')+
        axios.delete('http://localhost:5000/wish/deleteItem/'+localStorage.getItem(TOKEN_ID)+'/'+pid)
            .then(response=>{

                console.log(response.data);

                window.location.reload();
            })
            .catch(function (error) {
                console.log(error);
            });


    }

    //Item adding to cart

    addToCart(userid, productid, productName, productDescription, productPrice, productDiscount){


        console.log('user_id:'+userid);
        console.log('product_id:'+productid);
        console.log('product_name:'+productName);
        console.log('product_description:'+productDescription);
        console.log('product_price:'+productPrice);
        console.log('product_discount:'+productDiscount);

        const obj ={

            user_id :userid,
            product_id :productid,
            product_Name:productName,
            product_Description :productDescription,
            product_Price:productPrice,
            product_Discount:productDiscount,

        };
        //url of saving cart items for database
        axios.post('http://localhost:5000/cart/add', obj)

            .then(response=>{

                console.log(response.data);
                window.location.reload();

            })
            .catch(function (error) {
                console.log(error);
            });





        this.setState({

            user_id :'',
            product_id :'',
            product_Name:'',
            product_Description :'',
            product_Price:'',
            product_Discount:'',





        });





    }




    render() {
        return (




            <tr>
                <td>
                    {this.props.obj.wish_pname}
                </td>
                <td className="text-justify">
                    {this.props.obj.wish_des}
                </td>
                <td className="text-center">
                    {this.props.obj.wish_price}
                </td>
                <td className="text-center">
                    {this.props.obj.wish_discount}
                </td>
                <td className="btn-group">

                   <button className=" btn btn-danger btn-sm mr-2" onClick={()=>this.addToCart(



                       localStorage.getItem(TOKEN_ID),
                       this.props.obj.wish_pid,
                       this.props.obj.wish_pname,
                       this.props.obj.wish_des,
                       this.props.obj.wish_price,
                       this.props.obj.wish_discount,

                   )}>addtocart</button>

                    <button type="button" className="btn btn-danger btn-sm" onClick={()=>this.deleteItem(this.props.obj.wish_pid)} >remove</button>

                </td>
            </tr>







        );


    }
}

export default WishListTableRow;