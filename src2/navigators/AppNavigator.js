import React, { Component } from 'react';
import { Footer, FooterTab, Button, Icon, StyleProvider, getTheme, View, Fab } from 'native-base';
import { TabNavigator } from "react-navigation";
import { FontAwesome, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import { myThemeFooter } from "../../assets/css/mycustomtheme";
import { styles, background2FB8FE } from "../../assets/css/styles";

import HomeContainer from "../containers/HomeContainer";
import CouponComponent from "../components/CouponComponent";
import ExperienceComponent from "../components/ExperienceComponent";
import HotProductComponent from "../components/HotProductComponent";
import ListCouponComponent from "../components/ListCouponComponent";

export default (AppNavigator = TabNavigator(
    {
        Home: { screen: HomeContainer },
        Coupon: { screen: CouponComponent },
        Experience: { screen: ExperienceComponent },
        HotProduct: { screen: HotProductComponent },
        List: { screen: ListCouponComponent },
    },
    {
        headerMode: "none",
        tabBarPosition: "bottom",
        tabBarComponent: props => {
            return (
                <View>
                    <View style={{
                        height: 1,
                        backgroundColor: "#2FB8FE",
                    }}
                    />
                    <Footer>
                        <StyleProvider style={getTheme(myThemeFooter)}>
                            <FooterTab>
                                <Button
                                    transparent
                                    vertical
                                    active={props.navigation.state.index === 0}
                                    onPress={() => props.navigation.navigate("Home")}>
                                    <FontAwesome
                                        active={props.navigation.state.index === 0}
                                        color={props.navigation.state.index === 0 ? background2FB8FE : '#000000'}
                                        name="home"
                                        size={32}
                                    />
                                </Button>

                                <Button
                                    vertical
                                    active={props.navigation.state.index === 1}
                                    onPress={() => props.navigation.navigate("Coupon")}
                                >
                                    <FontAwesome
                                        active={props.navigation.state.index === 1}
                                        color={props.navigation.state.index === 1 ? background2FB8FE : '#000000'}
                                        name="shopping-cart"
                                        size={32}
                                    />
                                </Button>
                                <Button
                                    vertical
                                    active={props.navigation.state.index === 2}
                                    onPress={() => props.navigation.navigate("Experience")}
                                >
                                    <MaterialIcons
                                        active={props.navigation.state.index === 2}
                                        color={props.navigation.state.index === 2 ? background2FB8FE : '#000000'}
                                        name="rate-review"
                                        size={32}
                                    />
                                </Button>
                                <Button
                                    vertical
                                    active={props.navigation.state.index === 3}
                                    onPress={() => props.navigation.navigate("HotProduct")}
                                >
                                    <MaterialIcons
                                        active={props.navigation.state.index === 3}
                                        color={props.navigation.state.index === 3 ? background2FB8FE : '#000000'}
                                        name="whatshot"
                                        size={32}
                                    />
                                </Button>
                                <Button
                                    vertical
                                    active={props.navigation.state.index === 4}
                                    onPress={() => props.navigation.navigate("List")}
                                >
                                    <MaterialCommunityIcons
                                        active={props.navigation.state.index === 4}
                                        color={props.navigation.state.index === 4 ? background2FB8FE : '#000000'}
                                        name="television-guide"
                                        size={32}
                                    />
                                </Button>
                            </FooterTab>
                        </StyleProvider>
                    </Footer>
                </View>
            );
        }
    }
));
