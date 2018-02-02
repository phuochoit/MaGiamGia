import React, { Component } from 'react';
import { Text, View, FlatList} from 'react-native';
import { isEmpty } from "lodash";

// styles
import { styles } from "../../assets/styles";
//component
import IsloadingComponent from "../isloading";
import ItemsCategoryListDetailComponent from "./itemsCategoryListDetailComponent";
import EmptyComponent from "../emptyComponent";

// string
import { ALL, COUPON } from "../../values/strings";
class CategoryListCouponTabComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this._onRefresh = this._onRefresh.bind(this);
    }
    componentWillMount() {
        let action = { program: COUPON };
        this.props._onFetchTabListCategory(action);
    }
    _onRefresh(){
        let action = { 
            merchant: this.props.navigation.state.params.merchant,
            program: ALL 
        };
        this.props._onFetchRefreShingTabListCategory(action);
    }
    
    render() {
        console.log('render', this.props);
        if (isEmpty(this.props.categoryListDetail.categoryCouponList.coupon)) {
            return <EmptyComponent message='Không Có Chương Mã Giảm Giá Nào' />
        }
        return (
            <View style={[styles.wrapper]}>
                <FlatList
                    style={[styles.mghorizontal, styles.mgtop]}
                    ListHeaderComponent={() => { return (<View />); }}
                    ListFooterComponent={() => { return (<View />); }}
                    data={this.props.categoryListDetail.categoryCouponList.coupon}
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

export default CategoryListCouponTabComponent;