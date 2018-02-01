import React, { Component } from 'react';
import { Text, View } from 'react-native';

import {  DTMTB } from "../../values/strings";
class CouponListDTTabComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};

    }
    componentDidMount() {
        this.props._onFetchTabCouponList(DTMTB);
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