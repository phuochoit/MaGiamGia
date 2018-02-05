import React, { Component } from 'react';
import { Text, View, FlatList} from 'react-native';
import { isEmpty } from "lodash";
// component
import HeaderComponent from "../headerComponent";
import ProductItems from "./productItems";
import IsloadingComponent from "../isloading";
import EmptyComponent from "../emptyComponent";
//styles
import { styles } from "../../assets/styles";
//Container
import IsConnectedContainer from "../../containers/isConnectedContainer";

// admob
import { AdMobBannerFooter, AdMobBannerHeader } from "../admob";
class ProductComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            page: 1
        };
        this._onRefresh = this._onRefresh.bind(this);
        this._onEndReached = this._onEndReached.bind(this);
        this.props.onfetchNetConnected();
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
        if (!this.props.isConnected) {
            return (
                <IsConnectedContainer iconLeft={false} title="Sản Phẩm Bán Chạy" showHeader={true} />
            );
        }

        if (this.props.product.currentlySending) {
            return (
                <View style={[styles.wrapper]}>
                    <HeaderComponent iconLeft={false} title="Sản Phẩm Bán Chạy" navigation={this.props.navigation} />
                    <IsloadingComponent />
                </View>
            );
        }
        if (this.props.product.toast === 1){
            viewMore = <Text style={{ textAlign: 'center', paddingVertical: 5}}>Đang Tải Dữ Liệu!</Text>;
        } else if (this.props.product.toast === 2){
            viewMore = null;
        }
        if (isEmpty(this.props.product.product)) {
            return (
                <View style={[styles.wrapper]}>
                    <HeaderComponent iconLeft={false} title="Sản Phẩm Bán Chạy" navigation={this.props.navigation} />
                    <EmptyComponent message='Không Có Sản Phẩm Bán Chạy Nào!' />
                </View>
            );
        }

        return (
            <View style={[styles.wrapper]}>
                <HeaderComponent iconLeft={false} title="Sản Phẩm Bán Chạy" navigation={this.props.navigation} />
                <FlatList
                    style={[styles.mghorizontal, styles.mgtop]}
                    ListHeaderComponent={() => { return (<View style={{ marginBottom: 5 }}><AdMobBannerHeader bannerSize="banner" /></View>); }}
                    ListFooterComponent={() => { return (<AdMobBannerFooter bannerSize="banner" />); }}
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