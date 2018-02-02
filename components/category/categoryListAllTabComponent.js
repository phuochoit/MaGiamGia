import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { isEmpty } from "lodash";
// styles
import { styles } from "../../assets/styles";
//component
import IsloadingComponent from "../isloading";
import ItemsCategoryListDetailComponent from "./itemsCategoryListDetailComponent";
import EmptyComponent from "../emptyComponent";
// container
import IsConnectedContainer from "../../containers/isConnectedContainer";

// string
import { ALL } from "../../values/strings";
class CategoryListAllTabComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this._onRefresh = this._onRefresh.bind(this);
    }
    componentWillMount() {
        this.props._onFetchListCategory(this.props.navigation.state.params.merchant);
    }
    _onRefresh(){
        let action = {
            merchant: this.props.navigation.state.params.merchant,
            program: ALL
        };
        this.props._onFetchRefreShingTabListCategory(action);

    }
    componentDidMount() {

    }
    render() {
        console.log('this.props', this.props);
        if (!this.props.isConnected) {
            return (
                <IsConnectedContainer iconLeft={false} title="" showHeader={true} />
            );
        }
        if (this.props.categoryListDetail.currentlySending) {
            return <IsloadingComponent />
        }

        if (isEmpty(this.props.categoryListDetail.categoryCouponList.all)){
            return (<EmptyComponent message='Không Có Chương Trình Khuyến Mãi Nào' />);
        }
        return (
            <View style={[styles.wrapper]}>
                <FlatList
                    style={[styles.mghorizontal, styles.mgtop]}
                    ListHeaderComponent={() => { return (<View />); }}
                    ListFooterComponent={() => { return (<View />); }}
                    data={this.props.categoryListDetail.categoryCouponList.all}
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
export default CategoryListAllTabComponent;