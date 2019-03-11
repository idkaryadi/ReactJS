import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-6 left">
                            <div className="warna"></div>
                            <img src="./assets/img/logo/logo-alterra-academy-plain@2x.png"
                                className="logo1" />
                        </div>

                        <div className="col-6 right">
                            <h4 style={{ 'margin-left': "20px" }}>Contact Us</h4><br /><br />
                            <h6 style={{ 'margin-left': "20px" }}>Send us a message and we will get back to you as soon as possible</h6>
                            <form className="form-horizontal" role="form" style={{ 'margin-left': "20px" }}>

                                <div className="form-group">
                                    <label for="inlineFormInputGroup">Name<span style={{ color: "#FF0031" }}>*</span></label>
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text" style={{ 'background-color': "white" }}>
                                                <img src="./assets/img/ico/ico-user@2x.png" style={{ width: "16px", height: "19px" }} />
                                            </div>
                                        </div>
                                        <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="M. D. Luffy" style={{ 'border-left': "none" }} />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label for="inlineFormInputGroup">Email<span style={{ color: "#FF0031" }}>*</span></label>
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text" style={{ backgroundColor: "white" }}>
                                                <img src="./assets/img/ico/ico-email@2x.png" style={{ width: "20px", height: "20px" }} /></div>
                                        </div>
                                        <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="luffy@alpha.id" style={{ 'border-left': "none" }} />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label for="inlineFormInputGroup">Phone Number<span style={{ color: "#FF0031" }}>*</span></label>
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text" style={{ 'background-color': "white" }}>
                                                <img src="./assets/img/ico/ico-phone@2x.png" style={{ width: "16px", height: "24px" }} /></div>
                                        </div>
                                        <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="08xxxxxxxxx" style={{ 'border-left': "none" }} />
                                    </div>
                                </div>

                                <span>National</span><br />
                                <div className="dropdown-form-group">
                                    <button className="dropdown-toggle" style={{
                                        'background-color': "white", color: "#BEBEBE",
                                        margin: "10px 10px 0px 0px", 'text-align': "left", width: "100%", height: "43px"
                                    }} type="button" aria-labellendby="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Select item...
                                      </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{ 'background-color': "white", width: "90%", height: "43px", color: "#BEBEBE" }}>
                                        <a className="dropdown-item" href="#" style={{ color: "#888888" }}>Indonesian</a>
                                        <a className="dropdown-item" href="#" style={{ color: "#888888" }}>Malaysian</a>
                                        <a className="dropdown-item" href="#" style={{ color: "#888888" }}>Singapore</a>
                                        <a className="dropdown-item" href="#" style={{ color: "#888888" }}>Japan</a>
                                    </div>
                                </div>

                                <span>Message</span><br />
                                <textarea name="" style={{ width: "100%", height: "275px", margin: "10px 10px 0px 0px" }} placeholder="Send a new message..."></textarea>

                                <button type="submit" className="btn submitbutton">Submit</button>
                            </form>

                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Contact;