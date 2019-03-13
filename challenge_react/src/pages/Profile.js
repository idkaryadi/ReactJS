import React from "react";
import {Redirect} from "react-router-dom"
import { withRouter } from "react-router-dom";
import {actions} from './../Store'
import {connect} from 'unistore/react'

const Profile = props => {
    // const is_login = localStorage.getItem("is_login");
    // const email = localStorage.getItem("email");
    // const full_name = localStorage.getItem("username");
    // console.log("is_login", is_login, email, full_name);

    if (props.is_login === false){
        console.log(props.is_login)
        return <Redirect to={{pathname:"/signin"}}/>
    } else {
        return (
            <section className="content text-center">
                <h1 style={{textAlign:"center", paddingTop:"80px"}}>Profile</h1>
                Selamat datang Mr {props.username}<br/><br/>
                <p>
                    <label>Email: </label>{props.email}
                    {/* mail@mail.com */}
                <br/>
                    <label>Full Name: </label>{props.username} <br/>
                    {/* Mr Full Name */}
                </p>
            </section>
        );
    }
};

// export default Profile;
export default connect(
    'username, is_login, password', actions
    )(withRouter(Profile))