import React, { Component } from "react"
// import axios from "axios";
import { withRouter } from "react-router-dom";
import {actions} from './../Store'
import {connect} from 'unistore/react'

class SignIn extends Component {
    doLogin = () => {
        this.props.postLogin().then(
            () => {
                this.props.history.replace('/profile')
            }
        )
    }
    render() {
        // console.log("state", this.state);
        return (
            <section className="content signin text-center">
                <form onSubmit={e => e.preventDefault()}>
                    <h1 style={{ marginBottom: "2%", paddingTop:"80px"}}>Sign In</h1>
                    <div style={{ marginBottom: "2%" }}>
                        <input
                            type="text"
                            name="username"
                            placeholder="username"
                            onChange={e => this.props.setField(e)} //changeInput
                        />
                        <br/> <br/>
                        <input
                            type="password"
                            name="password"
                            placeholder="password"
                            onChange={e => this.props.setField(e)} //changeInput
                        />
                    </div>
                    <button style={{ marginRight: "2%" }} onClick={() => this.doLogin()}>SignIn</button>
                    <button type="reset">Reset</button>
                </form>
                <div className="text-center" style={{marginTop:"2%"}}>
                    Powered By : <a href="https://newsapi.org">News Api</a>
                </div>
            </section>
        );
    }
}

// export default withRouter(SignIn);
export default connect(
    'username, password', actions
    )(withRouter(SignIn))


    // state = { username: "", password: "" };
    // // tak tahu apa tulisannya
    // changeInput = e => {
    //     this.setState({ [e.target.name]: e.target.value });
    // };
    // postLogin = () => {
    //     const { username, password } = this.state;
    //     const data = {
    //         username: username,
    //         password: password
    //     };
    //     const self = this;
        // localStorage.setItem("is_login", true);
        // self.props.history.push("/profile")
        // with axios
        // axios
        //     .post("https://ata2react.free.beeceptor.com/auth", data)
        //     .then(function (response) {
        //         console.log(response.data);
        //         if (response.data.hasOwnProperty("api_key")) {
        //             localStorage.setItem("api_key", response.data.api_key);
        //             localStorage.setItem("is_login", true);
        //             localStorage.setItem("username", response.data.username);
        //             localStorage.setItem("email", response.data.email);
        //             self.props.history.push("/profile")
        //         }
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     })
    // };