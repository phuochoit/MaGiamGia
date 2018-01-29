import React, { Component } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { Icon } from 'react-native-elements'

import { styles } from "../assets/styles"
import HeaderComponent from "./headerComponent";

class IsConnectedComponent extends Component {
    _onPressIsConnected(){
        this.props.onfetchNetConnected();
    }
    render() {
        return (
            <View style={[styles.flex1, styles.wrapper_is_connected]}>
                <HeaderComponent iconLeft={this.props.iconLeft} title={this.props.title} />
                <View style={[styles.flex1, styles.jcc_aic]}>
                    <Icon
                        name='wifi-off'
                        size={50}
                        type='material-community'
                        color='#000'
                        iconStyle={styles.jcc_aic}
                    />

                    <TouchableOpacity
                        style={styles.jcc_aic}
                        onPress={this._onPressIsConnected.bind(this)}
                    >
                        <Text style={styles.is_connected_text}>Mất kết nối mạng, vui lòng thử lại.</Text>
                        <Text note>Xảy ra lỗi, Chạm màn hình để thử lại</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default IsConnectedComponent;
