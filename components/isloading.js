import React, { Component } from "react";
import { Container, Spinner, Header, Left, Button, Icon, Body, Right, Title, View } from "native-base";
//style
import { styles, Colorec5c54, backgroundE93400 } from "../../assets/css/styles"

class IsloadingComponent extends Component {

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
                <Header androidStatusBarColor={Colorec5c54} style={styles.menuHeader}>
                    {left}
                    <Body style={[styles.flex3, styles.headerBody]}>
                        <Title>{menutitle}</Title>
                    </Body>
                    {right}
                </Header>
                <View style={[styles.contentCenter]}>
                    <Spinner color={backgroundE93400} />
                </View>

            </Container>
        );
    }
}

export default IsloadingComponent;