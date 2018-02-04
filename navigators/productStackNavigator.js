import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
// screenName
import { HOTPRODUCT, HOTPRODUCTDETAIL } from "../values/screenName";
//containers
import ProductContainer from "../containers/productContainer";
//components
import ProductDetailComponent from "../components/product/productDetailComponent";
const ProductStackNavigator = StackNavigator(
    {
        HOTPRODUCT: { screen: ProductContainer },
        HOTPRODUCTDETAIL: { screen: ProductDetailComponent },
    },
    {
        headerMode: "none"
    }
);

export default ProductStackNavigator;