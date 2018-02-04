import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
// screenName
import { HOME, HOMEDETAIL, HOMECOUPONDETAIL} from "../values/screenName";
//containers
import HomeContainer from "../containers/homeContainer";
//components
import TopProductDetailComponent from "../components/home/topProductDetailComponent";
import CouponListDetailComponent from "../components/coupon/couponListDetailComponent";

const HomeStackNavigator = StackNavigator(
    {
        HOME: { screen: HomeContainer },
        HOMEDETAIL: { screen: TopProductDetailComponent },
        HOMECOUPONDETAIL: { screen: CouponListDetailComponent },
    },
    {
        headerMode: "none"
    }
);

export default HomeStackNavigator;