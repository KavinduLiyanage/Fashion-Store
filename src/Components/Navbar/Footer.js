import React, {Component} from 'react';
import './Footer.css'

class FooterPage extends Component {
    render() {
        return (
            <div>
                <br/>
                <footer className="page-footer font-small bg-dark text-light pt-4">

                    <div className="container-fluid text-center text-md-left">

                        <div className="row">

                            <div className="col-md-5">

                                <h5 className="text-uppercase">Fashion Store</h5>
                                <p>We are an online fast fashion brand that brings you weekly fashion and styles.</p>

                            </div>

                            <hr className="clearfix w-100 d-md-none pb-3"/>

                            <div className="col-md-4">

                                <h5 className="text-uppercase">Best Fashion every day</h5>

                                </div>

                            <div className="col-md-3">
                                <h5 className="text-uppercase">Keep In Touch</h5>
                                        <a className="footer-social-link" href="https://www.instagram.com/"><i className="fab fa-instagram" /></a>
                                        <a className="footer-social-link" href="https://www.facebook.com/"><i className="fab fa-facebook-f" /></a>
                                        <a className="footer-social-link" href="https://www.linkedin.com/"><i className="fab fa-linkedin-in" /></a>
                                        <a className="footer-social-link" href="https://github.com/MilindaRanawaka/Fashion-Store"><i className="fab fa-github" /></a>
                            </div>
                        </div>

                    </div>
                    <div className="footer-copyright text-center py-3">© 2020 Copyright:
                        <span> Fahion Store AF Team</span>
                    </div>
                </footer>
            </div>
        );
    }
}


export default FooterPage;