import React, { Component } from "react";
import { StackNavigator } from "react-navigation";

import { COUPON, LISTCOUPON } from "../values/screenName";

import CouponContainer from "../containers/couponContainer";
import CouponListContainer from "../containers/couponListContainer";

const CouponsStackNavigator = StackNavigator(
    {
        COUPON: { screen: CouponContainer },
        LISTCOUPON: { screen: CouponListContainer },
    },
    {
        headerMode: "none"
    }
);

export default CouponsStackNavigator;