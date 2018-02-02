import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';

// styles
import { styles, backgroundWhite, background } from "../../assets/styles";
//component
import HeaderComponent from "../headerComponent";
import IsloadingComponent from "../isloading";
import EmptyComponent from "../emptyComponent";
import CategoryListAllTabComponent from "./categoryListAllTabComponent";
import CategoryListSaleTabComponent from "./categoryListSaleTabComponent";
import CategoryListCouponTabComponent from "./categoryListCouponTabComponent";

// container
import IsConnectedContainer from "../../containers/isConnectedContainer";

// string
import { ALL } from "../../values/strings";
class CategoryListDetailComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this._onRefresh = this._onRefresh.bind(this);
    }
    componentWillMount() {
        
    }
    _onRefresh() {

    }
    componentDidMount() {

    }
    render() {
        const { navigate, state } = this.props.navigation;
        let componentTitle = state.params.name;
        return (
            <View style={[styles.wrapper]}>
                <HeaderComponent iconLeft={true} title={componentTitle} navigation={this.props.navigation} />

                <ScrollableTabView
                    style={styles.wrapper_coupon_list}
                    initialPage={0}
                    tabBarPosition="top"
                    tabBarBackgroundColor={backgroundWhite}
                    tabBarActiveTextColor={background}
                    tabBarUnderlineStyle={styles.coupon_list_tabBarUnderlineStyle}
                    renderTabBar={() => <ScrollableTabBar style={styles.coupon_list_renderTabBar} />}
                >
                    <CategoryListAllTabComponent tabLabel='Tất Cả' {...this.props} />
                    <CategoryListCouponTabComponent tabLabel='Mã giảm giá' {...this.props} />
                    <CategoryListSaleTabComponent tabLabel='Chương trình khuyến Mãi' {...this.props} />
                </ScrollableTabView>

            </View>
        );
    }
}
export default CategoryListDetailComponent;