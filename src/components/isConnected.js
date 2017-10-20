import React, { Component } from "react";
import { Image, TouchableOpacity } from "react-native";
import { Container, View, Text} from "native-base";
import { bindActionCreators} from "redux"
import { connect } from "react-redux";

import styles from "../../assets/css/styles"
import { checkConnectedDataThunk } from "../redux/actions/connectedActions";

class IsConnected extends Component {    
    
    render() {
        return (
            <View style={[styles.contentCenter]}>
                <Image 
                    source={require('../../assets/icons/wifi-off.png')}
                    fadeDuration={0}
                    style={{ width: 50, height: 50, marginBottom: 15, justifyContent: 'center', alignItems: 'center'}}
                />
                <TouchableOpacity
                    style={{ justifyContent: 'center', alignItems: 'center' }}
                    onPress={() => this.props.checkConnectedDataThunk()}
                >
                    <Text style={{marginBottom:5}}>Mất kết nối mạng, vui lòng thử lại.</Text>
                    <Text note>Xảy ra lỗi, Chạm màn hình để thử lại</Text>
                </TouchableOpacity>
            </View>
                
        );
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ checkConnectedDataThunk: checkConnectedDataThunk }, dispatch)
}

export default connect("",matchDispatchToProps)(IsConnected);
