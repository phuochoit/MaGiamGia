import React, { Component } from 'react';
import { Text, View, FlatList} from 'react-native';

// styles
import { styles } from "../../assets/styles";
//component
import IsloadingComponent from "../isloading";
import ItemsCouponListComponent from "./itemsCouponListComponent";

// string
import { ALL, COUPON } from "../../values/strings";
class CouponListCouponTabComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this._onRefresh = this._onRefresh.bind(this);
        
        
    }
    componentWillMount() {
        let action = { program: COUPON };
        this.props._onFetchTabCouponList(action);
    }
    _onRefresh(){
        let action = { 
            merchant: this.props.navigation.state.params.merchant,
            program: ALL 
        };
        this.props._onFetchCouponListTab(action);
    }
    render() {
        return (
            <View style={[styles.wrapper]}>
                <FlatList
                    style={[styles.mghorizontal, styles.mgtop]}
                    ListHeaderComponent={() => { return (<View />); }}
                    ListFooterComponent={() => { return (<View />); }}
                    data={this.props.couponList.couponList.coupon}
                    renderItem={({ item, index }) => {
                        return (
                            <ItemsCouponListComponent item={item} index={index} />
                        );
                    }}
                    keyExtractor={item => item.id}
                    onRefresh={this._onRefresh}
                    refreshing={this.props.couponList.currentlySending}
                />
            </View>
        );
    }
}

export default CouponListCouponTabComponent;