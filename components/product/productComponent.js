import React, { Component } from 'react';
import { Text, View } from 'react-native';

// component
import HeaderComponent from "../headerComponent";
//styles
import { styles } from "../../assets/styles";

class productComponent extends Component {
    render() {
        return (
            <View style={[styles.wrapper]}>
                <HeaderComponent iconLeft={false} title="Sản Phẩm Bán Chạy" />

            </View>
        );
    }
}

export default productComponent;