import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
// screenName
import { COUPON, LISTCOUPON, COUPONDETAIL} from "../values/screenName";
//containers
import CouponContainer from "../containers/couponContainer";
import CouponListContainer from "../containers/couponListContainer";
//components
import couponListDetailComponent from "../components/coupon/couponListDetailComponent";

const CouponsStackNavigator = StackNavigator(
    {
        COUPON: { screen: CouponContainer },
        LISTCOUPON: { screen: CouponListContainer },
        COUPONDETAIL: { screen: couponListDetailComponent },
    },
    {
        headerMode: "none"
    }
);

export default CouponsStackNavigator;