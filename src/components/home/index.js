import React, { Component } from "react";
import { StackNavigator } from "react-navigation";

import Home from "./home";
import Detail from "./detail";
import DetailCode from "./detail.code";

const HomeNav = StackNavigator(
    {
        Home: { screen: Home },
        Detail: { screen: Detail },
        DetailCode: { screen: DetailCode },
    },
    {
        headerMode: "none"
    }
);

export default HomeNav;