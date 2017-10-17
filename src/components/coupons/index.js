import React, { Component } from "react";
import { StackNavigator } from "react-navigation";

import Coupons from "./coupons";
import DetailCoupons from "./detail.coupons";

const CouponsNav = StackNavigator(
    {
        Coupons: { screen: Coupons },
        DetailCoupons: { screen: DetailCoupons },
    },
    {
        headerMode: "none"
    }
);

export default CouponsNav;