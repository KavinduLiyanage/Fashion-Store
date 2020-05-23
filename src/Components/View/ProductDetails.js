import React, { Component} from "react";
import axios from 'axios';
import {TOKEN_ID} from "../config";
import Comment from "./comment";
import DisplayComment from "./displayComment";
import {serverUrl} from "../config";
import ImageSlider from "../Product/subcomponents/ImageSlider";




export default class ProductDetails extends Component{

    constructor(props) {
        super(props);
        this.state = {
            images: [],
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
                                    images: response.data.images,
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
                    <div className="col-6 col-md-4">
                        <ImageSlider  images={this.state.images}/>
                    </div>

                    <div className="col-sm-6 col-md-8">

                         <h4>{this.state.pname}</h4>
                        <br/>

                        <h5>Price</h5> <h6>Rs {this.state.price}.00</h6>

                        <div className="bg-light" style={{width:"150px"}}><h5 className="text-warning">Discount {this.state.discount}%</h5></div>

                        <br/>
                        <div>

                           <h6>Description</h6>
                            <p className="text-justify" style={{width:"500px"}}>
                                {this.state.pdes}

                            </p>

                        </div>


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



                                    )}>Add to cart
                                       </button>




                                    <button type={"button"} className="btn btn-danger "  onClick={()=>this.addWishList(



                                        localStorage.getItem(TOKEN_ID),
                                        this.state.pid,
                                        this.state.pname,
                                        this.state.pdes,
                                        this.state.price,
                                        this.state.discount,



                                    )}>Add to wish list</button>


                                </div>

                            <br/>
                            <br/>

                       <Comment body={this.state.pid}/>





                    </div>


                </div>



                <div className="row">

                    <div className="col-md-12">

                        <h4>User Reviews</h4>
                        {/*<div style={{border:"2px solid hsl(0, 0%, 70%)"}}><DisplayComment comment={this.state.pid}/></div>*/}
                    </div>


                </div>
            </div>

        );
    }
}

