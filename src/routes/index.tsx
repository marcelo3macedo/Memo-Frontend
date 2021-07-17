import React from "react";
import { Switch } from "react-router-dom";

import Router from "./Router";
import SignIn from "@pages/auth/SignIn";
import SignUp from "@pages/auth/SignUp";
import Recover from "@pages/auth/Recover";
import Recovered from "@pages/auth/Recovered";

import Home from "@pages/main/Home";

export default function Routes() {
    return (
        <Switch>         
            <Router path="/" exact component={Home} />   
            <Router path="/" exact component={SignIn} />       
            <Router path="/" exact component={Recovered} />   
            <Router path="/" exact component={Recover} />   
            <Router path="/" exact component={SignUp} />
        </Switch>
    );
}