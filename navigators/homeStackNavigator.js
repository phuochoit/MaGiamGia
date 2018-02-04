import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
// screenName
import { HOME, HOMEDETAIL, HOMECOUPONDETAIL} from "../values/screenName";
//containers
import HomeContainer from "../containers/homeContainer";
import TopProductDetailContainer  from "../containers/topProductDetailContainer";
import CouponListDetailContainer from "../containers/couponListDetailContainer";


const HomeStackNavigator = StackNavigator(
    {
        HOME: { screen: HomeContainer },
        HOMEDETAIL: { screen: TopProductDetailContainer },
        HOMECOUPONDETAIL: { screen: CouponListDetailContainer },
    },
    {
        headerMode: "none"
    }
);

export default HomeStackNavigator;