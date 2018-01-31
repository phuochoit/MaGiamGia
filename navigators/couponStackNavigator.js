import React, { Component } from "react";
import { StackNavigator } from "react-navigation";

import { COUPON, LISTCOUPON } from "../values/screenName";

import CouponContainer from "../containers/couponContainer";
import CouponListComponent from "../components/coupon/couponListComponent";

const CouponsStackNavigator = StackNavigator(
    {
        COUPON: { screen: CouponContainer },
        LISTCOUPON: { screen: CouponListComponent },
    },
    {
        headerMode: "none"
    }
);

export default CouponsStackNavigator;