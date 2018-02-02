import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { isEmpty } from "lodash";

// styles
import { styles } from "../../assets/styles";
//component
import IsloadingComponent from "../isloading";
import ItemsCategoryListDetailComponent from "./itemsCategoryListDetailComponent";
import EmptyComponent from "../emptyComponent";
// string
import { ALL, SALE } from "../../values/strings";
class CategoryListSaleTabComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this._onRefresh = this._onRefresh.bind(this);
        
    }
    componentWillMount() {
        let action = { program: SALE };
        this.props._onFetchTabListCategory(action);
    }
    _onRefresh() {
        let action = {
            merchant: this.props.navigation.state.params.merchant,
            program: ALL
        };
        this.props._onFetchRefreShingTabListCategory(action);
    }
    render() {
        if (isEmpty(this.props.categoryListDetail.categoryCouponList.sale)) {
            return <EmptyComponent message='Không Có Chương Trình Khuyến Mãi Nào' />
        }
        return (
            <View style={[styles.wrapper]}>
                <FlatList
                    style={[styles.mghorizontal, styles.mgtop]}
                    ListHeaderComponent={() => { return (<View />); }}
                    ListFooterComponent={() => { return (<View />); }}
                    data={this.props.categoryListDetail.categoryCouponList.sale}
                    renderItem={({ item, index }) => {
                        return (
                            <ItemsCategoryListDetailComponent item={item} index={index} navigation={this.props.navigation}/>
                        );
                    }}
                    keyExtractor={item => item.id}
                    onRefresh={this._onRefresh}
                    refreshing={this.props.categoryListDetail.currentlySending}
                />
            </View>
        );
    }
}

export default CategoryListSaleTabComponent;