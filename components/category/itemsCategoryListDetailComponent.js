import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { isEmpty } from "lodash";

//style
import { styles } from "../../assets/styles";

import { CATEGORYDETAIL } from "../../values/screenName";
class ItemsCategoryListDetailComponent extends Component {
    constructor(props) {
        super(props);
        // console.log('this.props', this.props);
    }
    _onPressViewNow(){
        this.props.navigation.navigate(CATEGORYDETAIL, this.props.item);
    }
    render() {
        const { item, index } = this.props;
        let category_name = null;
        if (!isEmpty(item.categories)) {
            category_name = <Text style={styles.content_text_name_left_coupon_list_items}>Ngành Hàng:
                <Text style={styles.content_text_name_right_coupon_list_items}> {item.categories["0"].category_name_show}</Text>
            </Text>
        }
        let couponSave = 'KM';
        let couponName = 'Sale';
        if (!isEmpty(item.coupons)) {
            couponSave = item.coupons["0"].coupon_save;
            couponName = 'Coupon';
        }
        return (
            <View style={[styles.wrapper_coupon_list_items, styles.flex1]} key={index}>
                <View style={[styles.flex2, styles.pdall]}>
                    <View style={styles.box_content_coupon_list_items}>
                        <View style={[styles.jcc_aic, styles.flex2, styles.mgright]}>
                            <View style={styles.box_content_left_coupon_list_items}>
                                <View style={[styles.flex2, styles.pdall, styles.jcc_aic]}>
                                    <Text style={styles.box_content_coupon_save_left_coupon_list_items}>{couponSave.toUpperCase()}</Text>
                                </View>
                                <View style={styles.box_content_coupon_name_left_coupon_list_items}>
                                    <Text style={styles.content_coupon_name_left_coupon_list_items}>{couponName.toUpperCase()}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.flex8}>
                            <Text style={styles.content_text_title_coupon_list_items}>{item.name}</Text>
                            {category_name}
                            <Text style={styles.content_text_name_left_coupon_list_items}>Hạn Dùng:
                                <Text style={styles.content_text_name_right_coupon_list_items}> {item.end_time}</Text>
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.bottom_coupon_list_items}>
                    <TouchableOpacity onPress={this._onPressViewNow.bind(this)}>
                        <Text style={styles.bottom_text_coupon_list_items}>Xem Ngay</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
export default ItemsCategoryListDetailComponent;