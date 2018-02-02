import React, { Component } from "react";
import { View, Text } from "react-native";
import { Icon } from 'react-native-elements';

//style
import { styles, background} from "../assets/styles"

class EmptyComponent extends Component {
    render() {
        return (
            <View style={[styles.flex1, styles.wrapper_is_connected]}>
                <View style={[styles.flex1, styles.jcc_aic]}>
                    <Icon
                        name='emoji-sad'
                        type='entypo'
                        color={background}
                        size={50}
                    />
                    <Text style={styles.title_empty}> Oops! </Text>
                    <Text style={styles.message_empty}>{this.props.message}</Text>
                </View>
            </View>
        );
    }
}

export default EmptyComponent;