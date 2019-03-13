import React from "react";
import {Redirect} from "react-router-dom"

const Profile = props => {
    const is_login = JSON.parse(localStorage.getItem("is_login"));
    const email = localStorage.getItem("email");
    const full_name = localStorage.getItem("full_name");
    console.log("is_login", is_login);

    if (is_login === false){
        return <Redirect to={{pathname:"/signin"}}/>
    } else {
        return (
            <section className="content text-center">
                <h1 style={{textAlign:"center"}}>Profile</h1>
                <p>
                    <label>Email:</label>{/* {email} */}<br/>
                    mail@mail.com
                </p>
                <p>
                    <label>Full Name:</label>{/* {full_name} */} <br/>
                    Mr Full Name
                </p>
            </section>
        );
    }
};

export default Profile;