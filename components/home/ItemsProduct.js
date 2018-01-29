import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { Button } from "react-native-elements";
import { isNull, isEmpty } from "lodash";

// Styles
import { styles } from "../../assets/styles";

class ItemsProduct extends Component {
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

    }
    render() {
        const { item } = this.props;
        let strprice = null;
        price = item.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
        if (isEmpty(item.discount)) {
            strprice = price;
        } else {
            discount = item.discount.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
            strprice = price + '-' + discount;

        }

        return (
            <View style={{ flex: 0, flexDirection: 'row', padding: 10, borderColor: '#2FB8FE', borderWidth: 2, borderStyle: 'solid', marginBottom: 10 }}>
                <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
                    <Image
                        source={
                            this.state.imageLoading ?
                                { uri: item.image } :
                                require('../../assets/images/no-image.jpg')
                        }
                        style={{ width: 100, height: 100, resizeMode: 'contain', }}
                        onError={this._imageLoadingError.bind(this)}
                    />
                </View>
                <View style={{ flex: 7 }}>
                    <View>
                        <Text h1>{item.name}</Text>
                        <Text>{strprice}</Text>
                    </View>
                    <View style={{ flexDirection:'row'}}>
                        <View style={{flex:2}}/>
                        <View style={{ flex: 2}}>
                            <Button
                                borderRadius={6}
                                fontSize={13}
                                large={false}
                                backgroundColor='#FB8450'
                                onPress={this._onPressBuy.bind(this)}
                                title='Mua Ngay' />
                        </View>
                    </View>
                    
                </View>
            </View>
        );
    }
}


export default ItemsProduct;