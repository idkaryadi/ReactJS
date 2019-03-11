import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-6">
                                <img className="white-logo" src="assets/img/logo/logo-alterra-academy-plain@2x.png" />
                                <p className="copyright">© copyright Alterra Group 2019</p>
                            </div>
                            <div className="col-6">
                                <p className="follow">Follow us on</p>
                                <div className="sosmed-box">
                                    <p className=" sosmed"><img className="ikon" src="assets/img/ico/ico-facebook@2x.png" />Facebook</p>
                                    <p className=" sosmed"><img className="ikon" src="assets/img/ico/ico-twitter@2x.png" />Twitter</p>
                                    <p className=" sosmed"><img className="ikon" src="assets/img/ico/ico-instagram@2x.png" />Instagram</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;