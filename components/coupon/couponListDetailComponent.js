import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, Linking, Alert, Clipboard } from 'react-native';
import { Button } from "react-native-elements";
import { isEmpty } from "lodash";
//componet
import HeaderComponent from "../headerComponent";
//styles
import { styles, backgroundButton } from "../../assets/styles";
//Container
import IsConnectedContainer from "../../containers/isConnectedContainer";

class CouponListDetailComponent extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            imageLoading: true
        });
        this.props.onfetchNetConnected();
    }
    _imageLoadingError() {
        this.setState({ imageLoading: false });
    }
    _onPressCopy() {
        const { state } = this.props.navigation;
        let message = 'Đi Đến Trang Khuyến Mãi';
        if (!isEmpty(state.params.coupons)) {
            Clipboard.setString(state.params.coupons["0"].coupon_code);
            message = 'Đã Sao Chép Mã Giảm Giá, Đi Đến Trang Khuyến Mãi';
        }

        Alert.alert(
            'Thông Báo',
            message,
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
    _onPressOpenAff() {
        Linking.openURL(this.props.navigation.state.params.aff_link).catch(err => console.error('An error occurred', err));
    }
    render() {
        const { navigation } = this.props;
        let titleComponet = "Chi Tiết Khuyến Mãi";
        let textButtonCopy = "Đi Đến Khuyến Mãi";
        if (!this.props.isConnected) {
            return (
                <IsConnectedContainer iconLeft={true} title={titleComponet} showHeader={true} navigation={this.props.navigation} />
            );
        }

        if (!isEmpty(navigation.state.params.coupons)) {
            textButtonCopy = "Copy Mã Giảm Giá";
        }
        return (
            <View style={[styles.wrapper, styles.flex1]}>
                <HeaderComponent iconLeft={true} title={titleComponet} navigation={this.props.navigation} />
                <View style={styles.wrapper_detail_coupon}>
                    <View style={styles.header_detail_coupon}>
                        <Text style={styles.title_header_detail_coupon}>{navigation.state.params.name}</Text>
                    </View>
                    <View style={styles.content_detail_coupon}>
                        <TouchableOpacity onPress={this._onPressOpenAff.bind(this)} style={styles.touchableOpacity_content_detail_coupon}>
                            <Image
                                source={
                                    this.state.imageLoading ?
                                        { uri: navigation.state.params.image } :
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
                            onPress={this._onPressCopy.bind(this)}
                            title={textButtonCopy} />
                    </View>
                </View>
            </View>
        );
    }
}

export default CouponListDetailComponent;