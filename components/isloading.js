import React, { Component } from "react";
import { View, ActivityIndicator } from "react-native";

//style
import { styles, background} from "../assets/styles"

class IsloadingComponent extends Component {
    render() {
        return (
            <View style={[styles.flex1, styles.wrapper_is_connected]}>
                <View style={[styles.flex1, styles.jcc_aic]}>
                    <ActivityIndicator size="large" color={background} />
                </View>
            </View>
        );
    }
}

export default IsloadingComponent;