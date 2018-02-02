import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { isEmpty } from "lodash";
// styles
import { styles } from "../../assets/styles";
//component
import IsloadingComponent from "../isloading";
import ItemsCouponListComponent from "./itemsCouponListComponent";
// container
import IsConnectedContainer from "../../containers/isConnectedContainer";
class CouponListAllTabComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.props._onFetchCouponList(this.props.navigation.state.params.merchant);
    }
    componentDidMount() {

    }
    render() {
        if (!this.props.isConnected) {
            return (
                <IsConnectedContainer iconLeft={false} title="" showHeader={true} />
            );
        }

        if (this.props.couponList.currentlySending) {
            return <IsloadingComponent />
        }

        return (
            <View style={[styles.wrapper]}>
                <FlatList
                    style={[styles.mghorizontal, styles.mgtop]}
                    ListHeaderComponent={() => { return (<View />); }}
                    ListFooterComponent={() => { return (<View />); }}
                    data={this.props.couponList.couponList.all}
                    renderItem={({ item, index }) => {
                        return (
                            <ItemsCouponListComponent item={item} index={index} />
                        );
                    }}
                    keyExtractor={item => item.id}
                    onEndReachedThreshold={0.1}
                    onEndReached={this._onEndReached}
                    onRefresh={this._onRefresh}
                    refreshing={this.props.couponList.currentlySending}
                />
            </View>
        );
    }
}
export default CouponListAllTabComponent;