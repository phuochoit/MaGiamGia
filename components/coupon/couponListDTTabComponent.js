import React, { Component } from 'react';
import { Text, View } from 'react-native';

import {  DTMTB } from "../../values/strings";
class CouponListDTTabComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};

    }
    componentDidMount() {
        let action = {
            merchant : this.props.navigation.state.params.merchant,
            category: DTMTB
        };
        this.props._onFetchTabCouponList(action);
    }

    render() {
        return (
            <View>
                <Text>Điện thoại - Máy tính bảng</Text>
            </View> 
        );
    }
}

export default CouponListDTTabComponent;