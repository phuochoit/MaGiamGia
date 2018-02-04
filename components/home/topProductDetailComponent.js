import React, { Component } from 'react';
import { Text, View, Linking, Alert, Image, TouchableOpacity} from 'react-native';
import { isEmpty, isNull, isNumber} from "lodash";
import { Button } from "react-native-elements";
//componet
import HeaderComponent from "../headerComponent";
//styles
import { styles, backgroundButton } from "../../assets/styles";

class TopProductDetailComponent extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            imageLoading: true
        });
    }
    _imageLoadingError() {
        this.setState({ imageLoading: false });
    }
    _onPressOpenAff() {
        Alert.alert(
            'Thông Báo',
            'Đi Đến Trang Mua Sản Phẩm',
            [
                { text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                {
                    text: 'Yes', onPress: () => {
                        Linking.openURL(this.props.navigation.state.params.aff_link).catch(err => console.error('An error occurred', err));
                    }
                },
            ],
            { cancelable: true },
        );

    }
    render() {
        console.log('this.prod', this.props.navigation);
        const { navigate, state} = this.props.navigation;
        let titleComponet = 'Chi Tiết Sản Phẩm';
        let strprice, strdiscount, price, discount, strCategoryName = null;
        if (state.params.discount > 0) {
            discount = state.params.discount.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
            strdiscount = (<Text style={styles.product_txt_pice}>Giá Khuyến Mãi: <Text style={styles.product_txt_pice_bold}>{discount}</Text></Text>);
        }
        if (!isNull(state.params.price)) {
            price = state.params.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
            strprice = (<Text style={styles.product_txt_pice}>Giá Chưa Khuyến Mãi: <Text style={styles.product_txt_pice_bold}>{price}</Text></Text>);
        }
        if (!isNull(state.params.category_name) && !isNumber(state.params.category_name)){
            strCategoryName = (
                <TouchableOpacity>
                    <Text style={styles.product_txt_pice}>Danh Mục Khuyến Mãi: <Text style={styles.product_txt_pice_bold}>{state.params.category_name}</Text></Text>
                </TouchableOpacity>
            );
        }
        return (
            <View style={[styles.wrapper]}>
                <HeaderComponent iconLeft={true} title={titleComponet} navigation={this.props.navigation} />
                <View style={styles.wrapper_detail_coupon}>
                    <View style={styles.header_detail_coupon}>
                        <Text 
                            style={styles.title_header_detail_coupon}
                            onPress={this._onPressOpenAff.bind(this)}
                            >
                            {state.params.name}
                        </Text>
                        {strprice}
                        {strdiscount}
                        {strCategoryName}
                    </View>
                    <View style={styles.content_detail_coupon}>
                        <TouchableOpacity onPress={this._onPressOpenAff.bind(this)} style={styles.touchableOpacity_content_detail_coupon}>
                            <Image
                                source={
                                    this.state.imageLoading ?
                                        { uri: state.params.image } :
                                        require('../../assets/images/no-image.jpg')
                                }
                                style={[styles.image_detail_coupon]}
                                onError={this._imageLoadingError.bind(this)}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.footer_detail_coupon}>
                        <Button
                            raised
                            buttonStyle={styles.button_footer_detail_coupon}
                            borderRadius={6}
                            fontSize={13}
                            large={false}
                            backgroundColor={backgroundButton}
                            onPress={this._onPressOpenAff.bind(this)}
                            title='Mua Ngay' />
                    </View>

                </View>
            </View>
        );
    }
}

export default TopProductDetailComponent;