import React, { Component } from 'react';
import { TabNavigator } from "react-navigation";
import { Icon } from 'react-native-elements';

// screen name
import { HOME, COUPON, CATEGORY, HOTPRODUCT, LISTCOUPON } from "../values/screenName";

//component
// import homeComponent from "../components/home/homeComponent";
import HomeContainer from "../containers/homeContainer";
import categoryComponent from "../components/category/categoryComponent";
import couponComponent from "../components/coupon/couponComponent";
import productComponent from "../components/product/productComponent";

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
            screen: couponComponent,
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
            screen: productComponent,
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
                borderTopWidth:1,
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