import React, {Component} from 'react';
import axios from 'axios';
//import {Link} from 'react-router-dom';
import {TOKEN_ID} from "../config";

class WishListTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteItem = this.deleteItem.bind(this);
        this.state = {

            cart_cid :'',
            cart_pid :'',
            cart_pname:'',
            cart_des :'',
            cart_price:'',
            cart_discount:''



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

    addToCart(cartcid, cartpid, cartpname, cartdescription, cartprice, cartdiscount){


        console.log('wishcid:'+cartcid);
        console.log('wpid:'+cartpid);
        console.log('wish_product_name:'+cartpname);
        console.log('wish_product_description:'+cartdescription);
        console.log('wish_product_price:'+cartprice);
        console.log('wish_product_discount:'+cartdiscount);

        const obj ={

            wish_cid :cartcid,
            wish_pid :cartpid,
            wish_pname:cartpname,
            wish_des :cartdescription,
            wish_price:cartprice,
            wish_discount:cartdiscount,

        };
        //url of saving cart items for database
        axios.post('http://localhost:5000/cart/addCartItem', obj)

            //.then(res=>console.log(res.data));

            .then(response=>{

                console.log(response.data);
                window.location.reload();

            })
            .catch(function (error) {
                console.log(error);
            });





        this.setState({

            cart_cid :'',
            cart_pid :'',
            cart_pname:'',
            cart_des :'',
            cart_price:'',
            cart_discount:'',





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