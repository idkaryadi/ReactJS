import React, { Component } from 'react';

class Gallery extends Component {
    render() {
        return (
            <div>
                <header className=" shadow-und">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 col-12">
                                <img className="logo" src="./assets/img/logo/logo-alterra-academy@2x.png" />
                            </div>
                            <div className="col-md-6 col-12">
                                <nav>
                                    <ul>
                                        <li><a className="link-atas" href="about.html">ABOUT</a></li>
                                        <li><a className="link-about" href="galeri.html">GALERI</a></li>
                                        <li><a className="link-atas" href="contact.html">CONTACT</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </header>

                <section>
                    <p><img src={"./assets/img/ico/ico-gallery@2x.png"} />GALLERY</p>
                </section>

                <div className="container">
                    <div className="container galerry-container"></div>

                    <div className="fluid-gallery">
                        <div className="row mb-3">

                            <div className="col-md-4 image-prop">
                                <div className="card">
                                    <img src={"./assets/img/mk luffy/luffy1.png"} alt="Card image cap" style={{ width: "350px", height: "350px" }} />
                                </div>
                            </div>

                            <div className="col-md-4 image-prop">
                                <div className="card">
                                    <img src="./assets/img/mk luffy/luffy2.png" alt="Card image cap" style={{ width: "350px", height: "350px" }} />
                                </div>
                            </div>

                            <div className="col-md-4 image-prop">
                                <div className="card">
                                    <img src="./assets/img/mk luffy/luffy3.jpg" alt="Card image cap" style={{ width: "350px", height: "350px" }} />
                                </div>
                            </div>

                            <div className="col-md-4 image-prop">
                                <div className="card">
                                    <img src="./assets/img/mk luffy/luffy4.jpg" alt="Card image cap" style={{ width: "350px", height: "350px" }} />
                                </div>
                            </div>

                            <div className="col-md-4 image-prop">
                                <div className="card">
                                    <img src="./assets/img/mk luffy/luffy5.jpg" alt="Card image cap" style={{ width: "350px", height: "350px" }} />
                                </div>
                            </div>

                            <div className="col-md-4 image-prop">
                                <div className="card">
                                    <img src="./assets/img/mk luffy/luffy6.jpg" alt="Card image cap" style={{ width: "350px", height: "350px" }} />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>

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

export default Gallery;