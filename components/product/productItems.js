import React, { Component } from 'react';
import { Text, View, Image, Linking, TouchableOpacity } from 'react-native';
import { Button } from "react-native-elements";
import { isNull, isEmpty } from "lodash";

// Styles
import { styles } from "../../assets/styles";

// screenName
import { HOTPRODUCTDETAIL } from "../../values/screenName";

class ProductItems extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            imageLoading: true
        });
    }
    _imageLoadingError() {
        this.setState({ imageLoading: false });
    }
    _onPressBuy(){
        Linking.openURL(this.props.item.aff_link).catch(err => console.error('An error occurred', err));
    }
    _onPressViewDetail(item){
        console.log('_onPressViewDetail', item);
        this.props.navigation.navigate(HOTPRODUCTDETAIL, item);
    }
    render() {
        const { item } = this.props;
        let strprice,strdiscount, price, discount = null;
        if (item.discount > 0) {
            discount = item.discount.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
            strdiscount = (<Text style={styles.product_txt_pice}>Giá Khuyến Mãi: <Text style={styles.product_txt_pice_bold}>{discount}</Text></Text>);
        }
        if (!isNull(item.price)) {
            price = item.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
            strprice = (<Text style={styles.product_txt_pice}>Giá Chưa Khuyến Mãi: <Text style={styles.product_txt_pice_bold}>{price}</Text></Text>);
        }
        return (
            <View style={[styles.flex0, styles.wrapper_product_item]}>
                <View style={[styles.flex3, styles.box_product_item]}>
                    <Image
                        source={
                            this.state.imageLoading ?
                                { uri: item.image } :
                                require('../../assets/images/no-image.jpg')
                        }
                        style={[styles.image_product_item]}
                        onError={this._imageLoadingError.bind(this)}
                    />
                </View>
                <View style={[styles.pdletf, styles.flex7]}>
                    <View style={styles.flex3}>
                        <TouchableOpacity onPress={this._onPressBuy.bind(this)}>
                            <Text style={styles.product_txt_title}>{item.name}</Text>
                        </TouchableOpacity>
                        {strprice}
                        {strdiscount}
                    </View>
                    <View style={[styles.flex1,styles.box_product_bottom]}>
                        <View style={[styles.flex1, styles.button_box_product_bottom]}>
                            <TouchableOpacity 
                                style={[styles.button_home_product, styles.button_home_product_detail]}
                                onPress={this._onPressViewDetail.bind(this, item)}
                            >
                                <Text style={styles.button_product_text}>Xem Chi Tiết</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                style={[styles.button_home_product, styles.button_home_product_buy_now]}
                                onPress={this._onPressBuy.bind(this)}>
                                <Text style={styles.button_product_text }>Mua Ngay</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    
                </View>
            </View>
        );
    }
}


export default ProductItems;