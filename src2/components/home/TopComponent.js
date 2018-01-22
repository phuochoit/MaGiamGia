import React, { Component } from 'react';
import { Text, View } from "react-native";


class TopComponent extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text>Danh Sách Sản Phẩm Bán Chạy</Text>
            </View>
        );
    }
}

export default TopComponent;