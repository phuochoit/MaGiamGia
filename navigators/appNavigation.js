import React, { Component } from 'react';
import { TabNavigator } from "react-navigation";
import { Icon } from 'react-native-elements';

// screen name
import { HOME, COUPON, CATEGORY, HOTPRODUCT, LISTCOUPON } from "../values/screenName";

// StackNavigator
import HomeStackNavigator from "./homeStackNavigator";
import CouponsStackNavigator from "./couponStackNavigator";
import CategoryStackNavigator from "./categoryStackNavigator";
import ProductStackNavigator from "./productStackNavigator";
// styles
import { background, TitleColor, TextColor } from "../assets/styles";

export default (AppNavigator = TabNavigator(
    {
        HOME: {
            screen: HomeStackNavigator,
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
            screen: CategoryStackNavigator,
            navigationOptions: {
                tabBarLabel: "CATEGORY",
                tabBarIcon: ({ tintColor }) => (<Icon name='rate-review' type='MaterialIcons' color={tintColor} />)
            } },
        HOTPRODUCT: {
            screen: ProductStackNavigator,
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
        // order: ['CATEGORY','COUPON', 'HOME', 'HOTPRODUCT'],
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