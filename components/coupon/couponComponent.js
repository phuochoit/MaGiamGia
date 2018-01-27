import React, { Component } from 'react';
import { View,Text } from 'react-native';
// component
import HeaderComponent  from "../headerComponent";
//styles
import { styles } from "../../assets/styles";


class couponComponent extends Component {
    render() {
        return (
            <View style={[styles.wrapper]}>
                <HeaderComponent iconLeft={false} title="Chương Trình Giảm Giá" />
                
            </View>
        );
    }
}

export default couponComponent;