import React, { Component } from "react";
import { Container, Spinner, Header, Left, Button, Icon, Body, Right, Title, View } from "native-base";

import styles from "../../assets/css/styles"
import HeaderApp from "./header";
class Isloading extends Component {
    
    render() {
        // const { navigate, goBack } = this.props.navigation;
        const { menutitle, menuleft, menuright } = this.props;
        if (menuleft == "1") {
            left = (
                <Left style={[styles.flex1]} >
                    <Button transparent onPress={() => this.props.navigation.goBack()}>
                        <Icon name="arrow-back" />
                    </Button>
                </Left>
            );
        } else {
            left = <View />;
        }

        if (menuright == "1") {
            right = (
                <Right style={[styles.flex1]} />
            );
        } else {
            right = <View />;
        }
        
        return ( 
            <Container>
                <Header androidStatusBarColor='#ec5c54' >
                    {left}
                    <Body style={[styles.flex3, styles.headerBody]}>
                        <Title>{menutitle}</Title>
                    </Body>
                    {right}
                </Header>
                <View style={[styles.contentCenter]}>
                    <Spinner color="#ED1C24" />
                </View>
                
            </Container>
        );
    }
}

export default Isloading;
