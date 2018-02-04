import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { isEmpty } from "lodash";
// styles
import { styles } from "../../assets/styles";
//component
import IsloadingComponent from "../isloading";
import ItemsCouponListComponent from "./itemsCouponListComponent";
import EmptyComponent from "../emptyComponent";
// container
import IsConnectedContainer from "../../containers/isConnectedContainer";

// string
import { ALL } from "../../values/strings";
class CouponListAllTabComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this._onRefresh = this._onRefresh.bind(this);
    }
    componentWillMount() {
        this.props._onFetchCouponList(this.props.navigation.state.params.merchant);
    }
    _onRefresh(){
        let action = {
            merchant: this.props.navigation.state.params.merchant,
            program: ALL
        };
        this.props._onFetchCouponListTab(action);

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

        if (isEmpty(this.props.couponList.couponList.all)){
            return (<EmptyComponent message='Không Có Chương Trình Khuyến Mãi Nào' />);
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
                            <ItemsCouponListComponent item={item} index={index} navigation={this.props.navigation}/>
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
export default CouponListAllTabComponent;