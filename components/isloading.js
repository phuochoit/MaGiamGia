import React, { Component } from "react";
import { View, ActivityIndicator } from "react-native";

//style
import { styles, background, heightNoHeaderAndTab} from "../assets/styles"

class IsloadingComponent extends Component {
    render() {
        return (
            <View style={{flex:1, backgroundColor: '#fff'}}>
                <View style={{ flex: 1,justifyContent: 'center'}}>
                    <ActivityIndicator size="large" color={background} />
                </View>
            </View>
        );
    }
}

export default IsloadingComponent;