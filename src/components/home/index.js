import React, { Component } from "react";
import Home from "./home";
import Detail from "./detail";
import { StackNavigator } from "react-navigation";

const HomeNav = StackNavigator(
    {
        Home: { screen: Home },
        Detail: { screen: Detail },
    },
    {
        headerMode: "none"
    }
);

export default HomeNav;