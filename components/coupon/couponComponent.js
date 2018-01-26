import React, { Component } from 'react';
import { Text } from 'react-native';
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