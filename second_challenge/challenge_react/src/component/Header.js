import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <header className=" shadow-und">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 col-12">
                                <img className="logo" src={"./assets/img/logo/logo-alterra-academy@2x.png"} />
                            </div>
                            <div className="col-md-6 col-12">
                                <nav>
                                    <ul>
                                        <li><a className="link-about" href="about.html">ABOUT</a></li>
                                        <li><a className="link-atas" href="galeri.html">GALERI</a></li>
                                        <li><a className="link-atas" href="contact.html">CONTACT</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default Header;