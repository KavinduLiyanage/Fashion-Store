import React, { Component} from "react";
import axios from 'axios';
import{Link} from "react-router-dom";
import {toast} from "react-toastify";
import {TOKEN_ID} from "../config";


export default class ProductDetails extends Component{

    constructor(props) {
        super(props);
        this.state = {
            wish_cid :'',
            wish_pid :'',
            wish_pname:'',
            wish_des :'',
            wish_price:'',
            wish_discount:'',

            pid:'',
            pname:'',
            pdes:'',
            price:'',
            discount:'',


            cart_cid :'',
            cart_pid :'',
            cart_pname:'',
            cart_des :'',
            cart_price:'',
            cart_discount:''




            //product: []
        }

    }

    //getting product details
    componentDidMount() {


        axios.get('http://localhost:5000/product/productDetails/'+this.props.match.params.id)

            .then(response => {

                this.setState({
                                    pid : response.data._id,
                                    pname: response.data.productName,
                                    pdes : response.data.productDes,
                                    price: response.data.productPrice,
                                    discount : response.data.productDiscount



                });
            })
            .catch(function (error) {
                console.log(error);
            })


    }


    //Item add to wish list
    addWishList(wishcid, wishpid, wishpname, wishdescription, wishprice, wishdiscount){


        console.log('wishcid:'+wishcid);
        console.log('wpid:'+wishpid);
        console.log('wish_product_name:'+wishpname);
        console.log('wish_product_description:'+wishdescription);
        console.log('wish_product_price:'+wishprice);
        console.log('wish_product_discount:'+wishdiscount);

        const obj ={

            wish_cid :wishcid,
            wish_pid :wishpid,
            wish_pname:wishpname,
            wish_des :wishdescription,
            wish_price:wishprice,
            wish_discount:wishdiscount,

        };

        axios.post('http://localhost:5000/wish/addWishItem', obj)


            //.then(res=>console.log(res.data));

            .then(response=>{

                console.log(response.data);
                window.location.reload();

            })
            .catch(function (error) {
                console.log(error);
            });





        this.setState({

            wish_cid :'',
            wish_pid :'',
            wish_pname:'',
            wish_des :'',
            wish_price:'',
            wish_discount:'',



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

            cart_cid :cartcid,
            cart_pid :cartpid,
            cart_pname:cartpname,
            cart_des :cartdescription,
            cart_price:cartprice,
            cart_discount:cartdiscount,

        };

        axios.post('http://localhost:5000/cart/addCartItem', obj)
        //url of saving cart items for database


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
        return(

            <div className="container">

                <div className="row">
                    <div className="col-md-4">


                    </div>

                    <div className="col-md-8">

                         <h3> </h3>
                         <table className="table">
                            <thead>
                            <tr>
                                <th>Product</th>
                                <th className="text-justify">Description</th>
                                <th>Price</th>
                                <th>Discount</th>


                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                    {this.state.pname}
                                </td>
                                <td className="text-justify">
                                    {this.state.pdes}
                                </td>
                                <td >
                                    {this.state.price}
                                </td>
                                <td>
                                    {this.state.discount}
                                </td>


                                </tr>

                            </tbody>

                        </table>

                        <br/>
                        <br/>
                        <br/>
                        <br/>
                                <div>
                                    <button className="btn btn-danger mr-5" onClick={()=>this.addToCart(



                                        localStorage.getItem(TOKEN_ID),
                                        this.state.pid,
                                        this.state.pname,
                                        this.state.pdes,
                                        this.state.price,
                                        this.state.discount,



                                    )}>add to cart</button>




                                    <button type={"button"} className="btn btn-danger" onClick={()=>this.addWishList(



                                        localStorage.getItem(TOKEN_ID),
                                        this.state.pid,
                                        this.state.pname,
                                        this.state.pdes,
                                        this.state.price,
                                        this.state.discount,



                                    )}>whish List</button>

                                </div>
                    </div>


                </div>



            </div>

        );
    }
}

