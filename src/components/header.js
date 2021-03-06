import React, { Component } from "react";
import { Header, Left, Text, Button, Icon, Body, Right, Title, View} from "native-base";

import { styles } from "../../assets/css/styles"
import { AdMobBannerHeader } from "./admob";

class HeaderApp extends Component {
    
    render() {
        const { navigate, goBack} = this.props.navigation;
        const { menutitle, menuleft, menuright } = this.props;
        if (menuleft == "1"){
            left = (
                <Left style={[styles.flex1]} >
                    <Button transparent onPress={() => goBack()}>
                        <Icon name="arrow-back" />
                    </Button>
                </Left>
            );
        }else{
            left = <View /> ;
        }
        
        if (menuright == "1") {
            right = (
                <Right style={[styles.flex1]} />
            );
        } else {
            right = <View />;
        }

        return (
            <View>
                <Header androidStatusBarColor='#ec5c54' style={styles.menuHeader} >
                    {left}
                    <Body style={[styles.flex3, styles.headerBody]}>
                        <Title>{menutitle}</Title>
                    </Body>
                    {right}
                </Header>
                <AdMobBannerHeader bannerSize="banner" />
            </View>
        );
    }
}

export default HeaderApp;

