import React, { Component } from "react";
import { Image, TouchableOpacity } from "react-native";
import { Container, Header, Left, Text, Button, Icon, Body, Right, Title, View } from "native-base";
import { bindActionCreators } from "redux"
import { connect } from "react-redux";

import { styles, Colorec5c54} from "../../assets/css/styles"
import { checkConnectedDataThunk } from "../redux/actions/connectedActions";

class IsConnected extends Component {

    render() {
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
                    <Image
                        source={require('../../assets/icons/wifi-off.png')}
                        fadeDuration={0}
                        style={{ width: 50, height: 50, marginBottom: 15, justifyContent: 'center', alignItems: 'center' }}
                    />
                    <TouchableOpacity
                        style={{ justifyContent: 'center', alignItems: 'center' }}
                        onPress={() => this.props.checkConnectedDataThunk()}
                    >
                        <Text style={{ marginBottom: 5 }}>Mất kết nối mạng, vui lòng thử lại.</Text>
                        <Text note>Xảy ra lỗi, Chạm màn hình để thử lại</Text>
                    </TouchableOpacity>
                </View>
            </Container>

        );
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ checkConnectedDataThunk: checkConnectedDataThunk }, dispatch)
}

export default connect("", matchDispatchToProps)(IsConnected);
