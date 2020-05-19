import React, {Component} from 'react';

class FooterPage extends Component {
    render() {
        return (
            <div>
                <br/>
                <footer className="page-footer font-small bg-dark text-light pt-4">

                    <div className="container-fluid text-center text-md-left">

                        <div className="row">

                            <div className="col-md-6 mt-md-0 mt-3">

                                <h5 className="text-uppercase">Footer Content</h5>
                                <p>Online Fashion Store</p>

                            </div>

                            <hr className="clearfix w-100 d-md-none pb-3"/>

                                <div className="col-md-3 mb-md-0 mb-3">

                                    <h5 className="text-uppercase">Keep In Touch</h5>

                                    <ul className="list-unstyled">
                                        <li>
                                            <a href="#!">Link 1</a>
                                        </li>
                                        <li>
                                            <a href="#!">Link 2</a>
                                        </li>
                                    </ul>

                                </div>

                                <div className="col-md-3 mb-md-0 mb-3">

                                    <h5 className="text-uppercase">Links</h5>

                                    <ul className="list-unstyled">
                                        <li>
                                            <a href="#">Link 1</a>
                                        </li>
                                        <li>
                                            <a href="#">Link 2</a>
                                        </li>
                                    </ul>
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