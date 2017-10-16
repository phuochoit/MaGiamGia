import React, { Component } from "react";
import { StackNavigator } from "react-navigation";

import Guide from "./guide";
import DetailGuide from "./detail.guide";

const GuideNav = StackNavigator(
    {
        Guide: { screen: Guide },
        DetailGuide: { screen: DetailGuide },
    },
    {
        headerMode: "none"
    }
);

export default GuideNav;