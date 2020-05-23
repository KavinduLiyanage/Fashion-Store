import React from "react";
import './Homepage.css';
import FooterPage from "../Navbar/Footer";
import CustomerProductCardview from "../Product/Customerview/customer-product-cardview";

export default class Homepage extends React.Component{

    render() {
        return(
            <div>
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" alt="Carousel Bootstrap First"
                                 src="https://www.trilux.com/fileadmin/Content/DE/Images/Anwendungen/Shop-Retail/Header-Images/TRILUX_OKT_Shop-Retail_Fashion-head.jpg"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h2 className="home-crl">Welcome to Fashion Store</h2>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" alt="Carousel Bootstrap Second"
                                 src="https://blocherpartners.com/media/pages/projekte/trade-culture/kaiser-freiburg/1989744250-1571315109/header-1900x800.jpg"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" alt="Carousel Bootstrap Third"
                                 src="https://www.inretailshop.com/themes/at_o2/assets/img/modules/appagebuilder/images/Inspiraci%C3%B3n-Meier-panoramica.jpg"/>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                       data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button"
                       data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <div>
                    <div className="row">
                        <CustomerProductCardview/>
                    </div>
                </div>
                <FooterPage/>
            </div>
        );
    }
}
