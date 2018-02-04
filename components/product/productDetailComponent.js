import React, { Component } from 'react';
import { Text, View, Linking, Alert, Image, TouchableOpacity, ScrollView} from 'react-native';
import { isEmpty } from "lodash";
import { Button } from "react-native-elements";
//componet
import HeaderComponent from "../headerComponent";
//styles
import { styles, backgroundButton } from "../../assets/styles";

class ProductDetailComponent extends Component {
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
        return (
            <ScrollView style={[styles.wrapper]}>
                <HeaderComponent iconLeft={true} title={titleComponet} navigation={this.props.navigation} />
                <View style={styles.wrapper_detail_coupon}>
                    <View style={styles.header_detail_coupon}>
                        <Text style={styles.title_header_detail_coupon}>{state.params.name}</Text>
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
            </ScrollView>
        );
    }
}

export default ProductDetailComponent;