import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
// screenName
import { HOTPRODUCT, HOTPRODUCTDETAIL } from "../values/screenName";
//containers
import ProductContainer from "../containers/productContainer";
import ProductDetailContainer from "../containers/productDetailContainer";

const ProductStackNavigator = StackNavigator(
    {
        HOTPRODUCT: { screen: ProductContainer },
        HOTPRODUCTDETAIL: { screen: ProductDetailContainer },
    },
    {
        headerMode: "none"
    }
);

export default ProductStackNavigator;