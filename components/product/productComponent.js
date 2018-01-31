import React, { Component } from 'react';
import { Text, View, FlatList} from 'react-native';

// component
import HeaderComponent from "../headerComponent";
import ItemsProduct from "../home/ItemsProduct";
import IsloadingComponent from "../isloading";
//styles
import { styles } from "../../assets/styles";

class ProductComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            page: 1,
        };
        this._onRefresh = this._onRefresh.bind(this);
        this._onEndReached = this._onEndReached.bind(this);
    }
    componentWillMount() {
        this.props.onFetchProduct();
    }
    _onEndReached(){
        this.props.onFetchMoreProduct(this.state.page + 1);
        this.setState({ page: this.state.page + 1 });
    }
    _onRefresh(){
        this.props.onFetchProduct();
        this.setState({ page: 1 });
    }
    render() {
        if (this.props.product.currentlySending) {
            return <IsloadingComponent />
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
                            <ItemsProduct item={item} index={index} />
                        );
                    }}
                    keyExtractor={item => item.product_id}
                    onEndReachedThreshold={0.1}
                    onEndReached={this._onEndReached}
                    onRefresh={this._onRefresh}
                    refreshing={this.props.product.currentlySending}
                />
            </View>
        );
    }
}

export default ProductComponent;