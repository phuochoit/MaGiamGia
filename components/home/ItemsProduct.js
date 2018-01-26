import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import {  Button } from "react-native-elements";
import { isNull, isEmpty } from "lodash";

// Styles
import { styles } from "../../assets/styles";  

class ItemsProduct extends Component {
    render() {
        const { item } = this.props;
        let strprice = null;
        price = item.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
        if (isEmpty(item.discount)){
            strprice = price;
        }else{
            discount = item.discount.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
            strprice = price + '-' + discount;

        }

        return (
            <View style={{ flex: 0, flexDirection: 'row', padding: 10, borderColor: '#2FB8FE', borderWidth: 2, borderStyle: 'solid', marginBottom: 10}}>
                <View style={{ flex: 2 }}>
                    <Image
                        source={{ uri: item.image }}
                        style={{ width: 100, height: 100, resizeMode:'contain' }}
                        // resizeMode="cover"
                    />
                </View>
                <View style={{ flex: 8 }}>
                    <Text h1>{item.name}</Text>
                    <Text>{strprice}</Text>
                    <Button
                        raised
                        icon={{ name: 'cached' }}
                        title='BUTTON WITH ICON' />

                </View>
            </View>
        );
    }
}


export default ItemsProduct;