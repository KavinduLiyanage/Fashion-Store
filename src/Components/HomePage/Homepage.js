import React from "react";
import './Homepage.css';

export default class Homepage extends React.Component{
    render() {
        return(
            <div className="container">
                <h3 className="h3">Our Products</h3>
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <div className="product-grid6">
                            <div className="product-image6">
                                <a href="#">
                                    <img className="pic-1"
                                         src="http://bestjquery.com/tutorial/product-grid/demo10/images/img-1.jpg"/>
                                </a>
                            </div>
                            <div className="product-content">
                                <h3 className="title"><a href="#">Men's Shirt</a></h3>
                                <div className="price">$11.00
                                    <span>$14.00</span>
                                </div>
                            </div>
                            <ul className="social">
                                <li><a href="" data-tip="Quick View"><i className="fa fa-search"></i></a></li>
                                <li><a href="" data-tip="Add to Wishlist"><i className="fa fa-shopping-bag"></i></a>
                                </li>
                                <li><a href="" data-tip="Add to Cart"><i className="fa fa-shopping-cart"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="product-grid6">
                            <div className="product-image6">
                                <a href="#">
                                    <img className="pic-1"
                                         src="http://bestjquery.com/tutorial/product-grid/demo10/images/img-2.jpg" />
                                </a>
                            </div>
                            <div className="product-content">
                                <h3 className="title"><a href="#">Women's Red Top</a></h3>
                                <div className="price">$8.00
                                    <span>$12.00</span>
                                </div>
                            </div>
                            <ul className="social">
                                <li><a href="" data-tip="Quick View"><i className="fa fa-search"></i></a></li>
                                <li><a href="" data-tip="Add to Wishlist"><i className="fa fa-shopping-bag"></i></a>
                                </li>
                                <li><a href="" data-tip="Add to Cart"><i className="fa fa-shopping-cart"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="product-grid6">
                            <div className="product-image6">
                                <a href="#">
                                    <img className="pic-1"
                                         src="http://bestjquery.com/tutorial/product-grid/demo10/images/img-3.jpg" />
                                </a>
                            </div>
                            <div className="product-content">
                                <h3 className="title"><a href="#">Men's Shirt</a></h3>
                                <div className="price">$11.00
                                    <span>$14.00</span>
                                </div>
                            </div>
                            <ul className="social">
                                <li><a href="" data-tip="Quick View"><i className="fa fa-search"></i></a></li>
                                <li><a href="" data-tip="Add to Wishlist"><i className="fa fa-shopping-bag"></i></a>
                                </li>
                                <li><a href="" data-tip="Add to Cart"><i className="fa fa-shopping-cart"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="product-grid6">
                            <div className="product-image6">
                                <a href="#">
                                    <img className="pic-1"
                                         src="http://bestjquery.com/tutorial/product-grid/demo10/images/img-4.jpg" />
                                </a>
                            </div>
                            <div className="product-content">
                                <h3 className="title"><a href="#">Men's Shirt</a></h3>
                                <div className="price">$11.00
                                    <span>$14.00</span>
                                </div>
                            </div>
                            <ul className="social">
                                <li><a href="" data-tip="Quick View"><i className="fa fa-search"></i></a></li>
                                <li><a href="" data-tip="Add to Wishlist"><i className="fa fa-shopping-bag"></i></a>
                                </li>
                                <li><a href="" data-tip="Add to Cart"><i className="fa fa-shopping-cart"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}