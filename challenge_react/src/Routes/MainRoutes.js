import React from "react";
import {Route, Switch} from "react-router-dom";

import Home from "../pages/Home"
import SignIn from "../pages/SignIn"
import Sport from "../pages/Sport"
import Economy from "../pages/Economy"
import Entertaiment from "../pages/Entertaiment"
import Technology from "../pages/Technology"
// import Category from "../pages/Category"
import Health from "../pages/Health"
// import News from "../App"
import Profile from "../pages/Profile"
import NotMatch from "../pages/NoMatch"

const MainRoute = () => {
    return (
        <Switch>
            <Route exact path ="/" component={Home} />
            <Route exact path ="/signin" component={SignIn} />
            <Route exact path ="/profile" component={Profile} />
            <Route exact path ="/sport" component={Sport} />
            <Route exact path ="/ekonomi" component={Economy} />
            <Route exact path ="/hiburan" component={Entertaiment} />
            <Route exact path ="/teknologi" component={Technology} />
            <Route exact path ="/kesehatan" component={Health} />
            <Route component={NotMatch} />
        </Switch>
    );
};

export default MainRoute;