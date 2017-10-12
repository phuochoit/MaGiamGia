import React from "react";
import { AppRegistry, View, StatusBar } from "react-native";
import { Container, Body, Content, Header, Left, Right, Icon, Title, Input, Item, Label, Button, Text } from "native-base";

import styles from "../../assets/css/styles";

class Guide extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Container>
                <Header backgroundColor="#00AA8D" androidStatusBarColor='#008975'>
                    <Left style={[styles.flex1]} />
                    <Body style={[styles.flex1, styles.headerBody]}>
                        <Title>Hướng Dẫn</Title>
                    </Body>
                    <Right style={[styles.flex1]} />
                </Header>
                <Content padder style={[styles.flex1]}>

                </Content>
            </Container>
        );
    }
}

export default Guide;