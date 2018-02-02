import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
// screenName
import { CATEGORY } from "../values/screenName";
//containers
import CategoryContainer from "../containers/categoryContainer";



const CategoryStackNavigator = StackNavigator(
    {
        CATEGORY: { screen: CategoryContainer },
    },
    {
        headerMode: "none"
    }
);

export default CategoryStackNavigator;