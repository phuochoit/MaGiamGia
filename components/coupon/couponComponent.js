import React, { Component } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, Alert } from 'react-native';

// component
import HeaderComponent from "../headerComponent";
import IsloadingComponent from "../isloading";

//container
import IsConnectedContainer from "../../containers/isConnectedContainer";

//styles
import { styles } from "../../assets/styles";

// screenName
import { LISTCOUPON } from "../../values/screenName";

class ItemsCouponShop extends Component {
    _onPressGoTodeail(){
        const { navigation, item } = this.props;
        navigation.navigate(LISTCOUPON, { merchant: item.merchant, title: item.name});
    }
    render() {
        
        const { item } = this.props;
        return (
            <View style={styles.coupon_wrapper_items}>
                <TouchableOpacity 
                    onPress={this._onPressGoTodeail.bind(this)}
                >
                    <Image
                        style={styles.image_product_item}
                        source={{ uri: item.image }} />
                </TouchableOpacity>
            </View>
        );
    }
}

class CouponComponent extends Component {
    componentWillMount() {
        this.props._onFetchCouponShop();
    }
    render() {
        if (!this.props.isConnected) {
            return (
                <IsConnectedContainer iconLeft={false} title="Chương Trình Giảm Giá" />
            );
        }
        if (this.props.couponShop.currentlySending) {
            return <IsloadingComponent />
        }
        return (

            <View style={[styles.wrapper]}>
                <HeaderComponent iconLeft={false} title="Chương Trình Giảm Giá" navigation={this.props.navigation}/>
                <FlatList
                    style={[styles.mghorizontal, styles.mgtop]}
                    ListHeaderComponent={() => { return (<View />); }}
                ListFooterComponent={() => { return (<View />); }}
                data={this.props.couponShop.couponShop}
                renderItem={({ item, index }) => {
                    return (
                        <ItemsCouponShop item={item} index={index} navigation={this.props.navigation}/>
                    );
                }}
                keyExtractor={item => item.id}
                horizontal={false}
                numColumns={2}
                />
            </View>
        );
    }
}

export default CouponComponent;