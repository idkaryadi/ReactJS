import React, { Component } from 'react';

class About extends Component {
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

                <section>
                    <div className="container-fluid img-background">
                        <div className="row">
                            <div className="col-4">
                            </div>
                            <div className="col-4">
                                <img className="profile" src="assets/img/profile.jpg" />
                                <p className="name">Monkey D Luffy</p>
                                <p className="location">
                                    <img src="assets/img/ico/ico-location@2x.png" className="img-loc" />
                                    Malang, East Java, Indonesia
                          </p>
                                <p className="role">Frontend Dev, UI/UX and Design</p>
                                <button type="button" className="btn btn-download">Download cv</button>
                            </div>
                            <div className="col-4">
                            </div>
                        </div>
                    </div>

                    <div className="container-fluid">
                        <div className="row long-square white shadow-box">
                            <div className="col-md-6">
                                <p className="about-me">About Me</p>
                                <article>Hi! I am <strong>Monkey D Luffy</strong>, I work as a Front-end Developer at <a href="https://www.alterra.id" className="alterra">Alterra Group</a>.</article><br />
                                <article>Front-end Developer are constructive work website use HTML, CSS, and JavaScript.</article><br />
                                <article>Front-end Developer are the people who make it design and develop the design until become a website that can run.</article>
                            </div>
                            <div className="col-md-6">
                                <p className="information">Information</p>
                                <table className="table table-striped table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="row">Age</th>
                                            <td>: 22 tahun</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">Email</th>
                                            <td>: monkeydluffy@alphatech.id</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Address</th>
                                            <td>: Jalan Raya Tidar No 23, Malang</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>

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

export default About;