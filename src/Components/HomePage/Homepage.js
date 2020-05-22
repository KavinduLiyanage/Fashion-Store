import React from "react";
import './Homepage.css';
import FooterPage from "../Navbar/Footer";
import CustomerProductCardview from "../Product/Customerview/customer-product-cardview";

export default class Homepage extends React.Component{
    render() {
        return(
            <div>
                <div className="carousel slide" id="carousel-873988" >
                    <ol className="carousel-indicators">
                        <li data-slide-to="0" data-target="#carousel-873988" className="active">

                        </li>
                        <li data-slide-to="1" data-target="#carousel-873988">

                        </li>
                        <li data-slide-to="2" data-target="#carousel-873988">

                        </li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100 carousel-imgs" alt="Carousel Bootstrap First"
                                 src="https://www.trilux.com/fileadmin/Content/DE/Images/Anwendungen/Shop-Retail/Header-Images/TRILUX_OKT_Shop-Retail_Fashion-head.jpg"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100 carousel-imgs" alt="Carousel Bootstrap Second"
                                 src="https://blocherpartners.com/media/pages/projekte/trade-culture/kaiser-freiburg/1989744250-1571315109/header-1900x800.jpg"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100 carousel-imgs" alt="Carousel Bootstrap Third"
                                 src="https://www.inretailshop.com/themes/at_o2/assets/img/modules/appagebuilder/images/Inspiraci%C3%B3n-Meier-panoramica.jpg"/>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carousel-873988" data-slide="prev">
                        <span className="carousel-control-prev-icon"></span> <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carousel-873988" data-slide="next">
                        <span className="carousel-control-next-icon"></span> <span className="sr-only">Next</span>
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
