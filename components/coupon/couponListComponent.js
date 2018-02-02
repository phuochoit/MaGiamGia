import React, { Component } from 'react';
import { Text, View} from 'react-native';
import ScrollableTabView, { ScrollableTabBar} from 'react-native-scrollable-tab-view';

// component
import HeaderComponent from "../headerComponent";
import IsloadingComponent from "../isloading";

//componet tab
import CouponListAllTabComponent from "./couponListAllTabComponent";
import CouponListCouponTabComponent from "./couponListCouponTabComponent";
import CouponListSaleTabComponent from "./couponListSaleTabComponent";

//container
import IsConnectedContainer from "../../containers/isConnectedContainer";

//styles
import { styles, background, backgroundWhite } from "../../assets/styles";

class CouponListComponent extends Component {
    componentWillMount() {
    }
    render() {
        const { navigate, state } = this.props.navigation;
        const componentTitle =`Chương Trình Khuyến Mãi ${state.params.title}`;
        return (
            <View style={[styles.wrapper, styles.flex1]}>
                <HeaderComponent iconLeft={true} title={componentTitle} navigation={this.props.navigation}/>
                
                <ScrollableTabView
                    style={styles.wrapper_coupon_list}
                    initialPage={0}
                    tabBarPosition="top"
                    tabBarBackgroundColor={backgroundWhite}
                    tabBarActiveTextColor={background}
                    tabBarUnderlineStyle={styles.coupon_list_tabBarUnderlineStyle}
                    renderTabBar={() => <ScrollableTabBar style={styles.coupon_list_renderTabBar}/>}
                >
                    <CouponListAllTabComponent tabLabel='Tất Cả' {...this.props} />
                    <CouponListCouponTabComponent tabLabel='Mã giảm giá' {...this.props} />
                    <CouponListSaleTabComponent tabLabel='Chương trình khuyến Mãi' {...this.props}/>
                </ScrollableTabView>
            </View>
        );
    }
}

export default CouponListComponent;