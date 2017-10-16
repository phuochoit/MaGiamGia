import React, { Component } from "react";
import { StackNavigator } from "react-navigation";

import News from "./news";

const NewsNav = StackNavigator(
    {
        News: { screen: News },
    },
    {
        headerMode: "none"
    }
);

export default NewsNav;