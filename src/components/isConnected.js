import React, { Component } from "react";
import { Image  } from "react-native";
import { Container, View, Text} from "native-base";

import styles from "../../assets/css/styles"

class IsConnected extends Component {    
    render() {
        return (
            <View style={[styles.contentCenter]}>
                <Image 
                    source={require('../../assets/icons/wifi-off.png')}
                    fadeDuration={0}
                    style={{ width: 50, height: 50, marginBottom: 15, justifyContent: 'center', alignItems: 'center'}}
                />
                <Text style={{marginBottom:5}}>Mất kết nối mạng, vui lòng thử lại.</Text>
                <Text note>Xảy ra lỗi, Chạm màn hình để thử lại</Text>
            </View>
                
        );
    }
}

export default IsConnected;
