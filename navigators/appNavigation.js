import React, { Component } from 'react';
import { TabNavigator } from "react-navigation";
import { Icon } from 'react-native-elements';

// screen name
import { HOME, COUPON, CATEGORY, HOTPRODUCT, LISTCOUPON } from "../values/screenName";

//component
import categoryComponent from "../components/category/categoryComponent";

// container
import HomeContainer from "../containers/homeContainer";
import ProductContainer  from "../containers/productContainer";

// StackNavigator
import CouponsStackNavigator from "./couponStackNavigator";

// styles
import { background, TitleColor, TextColor } from "../assets/styles";

export default (AppNavigator = TabNavigator(
    {
        HOME: {
            screen: HomeContainer,
            navigationOptions :{
                tabBarLabel: "HOME",
                tabBarIcon: ({ tintColor, focused }) => (<Icon name='home' type='MaterialCommunityIcons' color={tintColor}/>)
            } 
        },
        COUPON: {
            screen: CouponsStackNavigator,
            navigationOptions: {
                tabBarLabel: "COUPON",
                tabBarIcon: ({ tintColor }) => (<Icon name='shopping-cart' type='Entypo' color={tintColor} />)
            }
        },
        CATEGORY: {
            screen: categoryComponent,
            navigationOptions: {
                tabBarLabel: "CATEGORY",
                tabBarIcon: ({ tintColor }) => (<Icon name='rate-review' type='MaterialIcons' color={tintColor} />)
            } },
        HOTPRODUCT: {
            screen: ProductContainer,
            navigationOptions: {
                tabBarLabel: "HOTPRODUCT",
                tabBarIcon: ({ tintColor }) => (<Icon name='whatshot' type='MaterialIcons' color={tintColor}/>)
            } 
        },
    },
    {
        headerMode: "none",
        tabBarPosition: "bottom",
        animationEnabled: true,
        lazyLoad: true,
        tabBarOptions:{
            showIcon: true,
            showLabel: false,
            tinColor: TextColor,
            activeTintColor: background,
            inactiveTintColor: TextColor,
            lazyLoad: true,
            style: {
                backgroundColor: TitleColor,
                borderTopColor: background,
                borderTopWidth:2,
                borderStyle: 'solid'
            },
            indicatorStyle:{
                backgroundColor: 'transparent',
            },
            iconStyle:{
                width:30,
                height:30,
            },
        }
        
    }
));