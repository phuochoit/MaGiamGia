import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
// screenName
import { CATEGORY, CATEGORYLISTDETAIL, CATEGORYDETAIL  } from "../values/screenName";
//containers
import CategoryContainer from "../containers/categoryContainer";
import CategoryListDetailContainer from "../containers/categoryListDetailContainer";
import CouponListDetailContainer from "../containers/couponListDetailContainer";


const CategoryStackNavigator = StackNavigator(
    {
        CATEGORY: { screen: CategoryContainer },
        CATEGORYLISTDETAIL: { screen: CategoryListDetailContainer },
        CATEGORYDETAIL: { screen: CouponListDetailContainer },
    },
    {
        headerMode: "none"
    }
);

export default CategoryStackNavigator;