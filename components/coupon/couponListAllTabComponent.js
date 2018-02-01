import React, { Component } from 'react';
import { Text, View } from 'react-native';

class CouponListAllTabComponent extends Component {
    constructor(props){
        super(props);
        this.state = {};
        
    }
    componentDidMount(){
        console.log('this.props.navigation.state.params.merchant', this.props.navigation.state.params.merchant);
        this.props._onFetchCouponList(this.props.navigation.state.params.merchant);
    }
    render() {
        return (
            <View>
                <Text>My</Text>
            </View> 
        );
    }
}

export default CouponListAllTabComponent;