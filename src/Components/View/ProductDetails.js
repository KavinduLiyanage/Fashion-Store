import React, { Component} from "react";
import axios from 'axios';
import{Link} from "react-router-dom";
import {toast} from "react-toastify";
import {TOKEN_ID} from "../config";
import Comment from "./comment";
import DisplayComment from "./displayComment";
import {serverUrl} from "../config";



export default class ProductDetails extends Component{

    constructor(props) {
        super(props);
        this.state = {

            body:'',

            wish_cid :'',
            wish_pid :'',
            wish_pname:'',
            wish_des :'',
            wish_price:'',
            wish_discount:'',
            wish_productId:'',

            pid:'',
            pname:'',
            pdes:'',
            price:'',
            discount:'',

            user_id :'',
            product_id :'',
            product_Name:'',
            product_Description :'',
            product_Price:'',
            product_Discount:''




            //product: []
        }

    }

    //getting product details
    componentDidMount() {


        axios.get(serverUrl+'/product/productDetails/'+this.props.match.params.id)

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

        this.setState({

            wish_productId : wishpid,
        })
        const obj ={

            wish_cid :wishcid,
            wish_pid :wishpid,
            wish_pname:wishpname,
            wish_des :wishdescription,
            wish_price:wishprice,
            wish_discount:wishdiscount,

        };






                    axios.post(serverUrl+'/wish/addWishItem', obj)

                        //.then(res=>console.log(res.data));

                        .then(response=>{

                            console.log(response.data);
                            window.location='/wishList';

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

    addToCart(userid, productid, productName, productDescription,productPrice,productDiscount){


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
        axios.post(serverUrl+'/cart/add', obj)

            .then(response=>{

                console.log(response.data);
                window.location='/cart';

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

        //const productId = this.state.pid;
        return(

            <div className="container">

                <div className="row">
                    <div className="col-md-2">



                    </div>

                    <div className="col-md-10">

                         <h3> </h3>
                         <table className="table">
                            <thead>
                            <tr>
                                <th>Product</th>
                                <th className="text-center">Description</th>
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
                                <td>
                                    Rs{this.state.price}.00
                                </td>
                                <td>
                                    {this.state.discount}%
                                </td>


                                </tr>

                            </tbody>

                        </table>

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

                            <br/>
                            <br/>

                       <Comment body={this.state.pid}/>

                        <h4 className="text-success">Comments:</h4>
                            <DisplayComment comment={this.state.pid}/>



                    </div>


                </div>



            </div>

        );
    }
}

