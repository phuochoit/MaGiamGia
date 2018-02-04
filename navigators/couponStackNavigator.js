import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
// screenName
import { COUPON, LISTCOUPON, COUPONDETAIL} from "../values/screenName";
//containers
import CouponContainer from "../containers/couponContainer";
import CouponListContainer from "../containers/couponListContainer";
import CouponListDetailContainer from "../containers/couponListDetailContainer";
//components
// import couponListDetailComponent from "../components/coupon/couponListDetailComponent";

const CouponsStackNavigator = StackNavigator(
    {
        COUPON: { screen: CouponContainer },
        LISTCOUPON: { screen: CouponListContainer },
        COUPONDETAIL: { screen: CouponListDetailContainer },
    },
    {
        headerMode: "none"
    }
);

export default CouponsStackNavigator;