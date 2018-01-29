import React, { Component } from 'react';
import { Text, View, FlatList} from 'react-native';

//component
import ItemsProduct from "./ItemsProduct";
import IsloadingComponent from "../isloading";
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
            return <IsloadingComponent />
        }
        
        return (
            <View style={[styles.flex1]}>
                <Text style={[styles.margin_wrapper, styles.title]}>Sản Phẩm Bán Chạy Nhất</Text>
                <FlatList 
                    style={styles.mghorizontal}
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