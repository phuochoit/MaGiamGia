import React, { Component } from 'react';
import { Text, View, FlatList, ActivityIndicator, Image} from 'react-native';

//component
import ItemsProduct from "./ItemsProduct";

// Styles
import {styles} from "../../assets/styles";

class TopProductComponent extends Component {
    componentWillMount() {
        this.props.onFetchTopProduct();
    }
    componentDidMount() {
    };
    render() {
        if (this.props.topProduct.currentlySending){
            return <ActivityIndicator size="large" color="#0000ff" />
        }
        
        return (
            <View style={[styles.flex1]}>
                <Text style={[styles.margin_wrapper, styles.title]}>Sản Phẩm Bán Chạy Nhất</Text>
                <FlatList 
                    style={{ marginHorizontal:10}}
                    ListHeaderComponent={() => { return (<View />); }} 
                    ListFooterComponent={() => { return (<View/>);}}
                    data={this.props.topProduct.product.data }
                    renderItem={({ item, index }) => {
                        return (
                            <ItemsProduct item={item} index={index}/>
                        );
                    }}
                    keyExtractor={item => item.product_id}
                />
            </View>
        );
    }
}
export default TopProductComponent;