import React from 'react';
import { TabNavigator } from "react-navigation";
import { Button, Text, Footer, FooterTab, Icon } from "native-base";

import HomeNav  from "./home";
import GuideNav from "./guide";
import Gift from "./gift";
import NewsNav from "./news";

// import style app
import styles from "../../assets/css/styles";

export default (HomeApp = TabNavigator(
    {
        home: { screen: HomeNav },
        news: { screen: NewsNav },
        gift: { screen: Gift },
        guide: { screen: GuideNav },
    },
    {
        tabBarPosition: "bottom",
        tabBarComponent: props => {
            return (
                <Footer >
                    <FooterTab>
                        <Button
                            vertical
                            active={props.navigationState.index === 0}
                            onPress={() => props.navigation.navigate("home")}>
                            <Icon name="home" />
                            <Text style={[styles.fontsizemenu]}>Trang Chủ</Text>
                        </Button>
                        <Button
                            vertical
                            active={props.navigationState.index === 1}
                            onPress={() => props.navigation.navigate("news")}>
                            <Icon name="home" />
                            <Text style={[styles.fontsizemenu]}>Tin Tức</Text>
                        </Button>
                        <Button
                            vertical
                            active={props.navigationState.index === 2}
                            onPress={() => props.navigation.navigate("gift")}>
                            <Icon name="home" />
                            <Text style={[styles.fontsizemenu]}>Quà Tặng</Text>
                        </Button>
                        <Button
                            vertical
                            active={props.navigationState.index === 3}
                            onPress={() => props.navigation.navigate("guide")}>
                            <Icon name="headset" />
                            <Text style={[styles.fontsizemenu]}>Hướng Dẫn</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            );
        }
    }
));