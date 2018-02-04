import React, { Component } from 'react';
import { Text, View, FlatList} from 'react-native';
// component
import HeaderComponent from "../headerComponent";
import ProductItems from "./productItems";
import IsloadingComponent from "../isloading";
//styles
import { styles } from "../../assets/styles";

class ProductComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            page: 1
        };
        this._onRefresh = this._onRefresh.bind(this);
        this._onEndReached = this._onEndReached.bind(this);
    }
    componentWillMount() {
        this.props.onFetchProduct();
    }
    _onEndReached(){
        this.props.onFetchMoreProduct(this.state.page + 1);
        this.setState({ page: this.state.page + 1});
    }
    _onRefresh(){
        this.props.onFetchProduct();
        this.setState({ page: 1 });
    }
    render() {
        let viewMore = null;
        if (this.props.product.currentlySending) {
            return (
                <View style={[styles.wrapper]}>
                    <HeaderComponent iconLeft={false} title="Sản Phẩm Bán Chạy" navigation={this.props.navigation} />
                    <IsloadingComponent />
                </View>
            );
        }
        if (this.props.product.toast === 1){
            viewMore = <Text>Đang Tải Dữ Liệu!</Text>;
        } else if (this.props.product.toast === 2){
            viewMore = null;
        }
        return (
            <View style={[styles.wrapper]}>
                <HeaderComponent iconLeft={false} title="Sản Phẩm Bán Chạy" navigation={this.props.navigation} />
                <FlatList
                    style={[styles.mghorizontal, styles.mgtop]}
                    ListHeaderComponent={() => { return (<View />); }}
                    ListFooterComponent={() => { return (<View />); }}
                    data={this.props.product.product}
                    renderItem={({ item, index }) => {
                        return (
                            <ProductItems item={item} index={index} navigation={this.props.navigation}/>
                        );
                    }}
                    keyExtractor={item => item.product_id}
                    onEndReachedThreshold={0.1}
                    onEndReached={this._onEndReached}
                    onRefresh={this._onRefresh}
                    refreshing={this.props.product.currentlySending}
                />
                {viewMore}
            </View>
        );
    }
}

export default ProductComponent;