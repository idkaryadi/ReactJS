import React, { Component } from 'react';

class Gallery extends Component {
    render() {
        return (
            <div>
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
            </div>
        );
    }
}

export default Gallery;