import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
// screenName
import { CATEGORY, CATEGORYLISTDETAIL, CATEGORYDETAIL  } from "../values/screenName";
//containers
import CategoryContainer from "../containers/categoryContainer";
import CategoryListDetailContainer from "../containers/categoryListDetailContainer";
//components
import couponListDetailComponent from "../components/coupon/couponListDetailComponent";

const CategoryStackNavigator = StackNavigator(
    {
        CATEGORY: { screen: CategoryContainer },
        CATEGORYLISTDETAIL: { screen: CategoryListDetailContainer },
        CATEGORYDETAIL: { screen: couponListDetailComponent },
    },
    {
        headerMode: "none"
    }
);

export default CategoryStackNavigator;