import React, { Component } from 'react';
import { Text, View} from 'react-native';
import ScrollableTabView, { ScrollableTabBar} from 'react-native-scrollable-tab-view';

// component
import HeaderComponent from "../headerComponent";
import IsloadingComponent from "../isloading";

//componet tab
import CouponListAllTabComponent from "./couponListAllTabComponent";
import CouponListDLTabComponent from "./couponListDLTabComponent";
import CouponListDTTabComponent from "./couponListDTTabComponent";
import CouponListMAMQPTabComponent from "./couponListMAMQPTabComponent";
import CouponListMBTabComponent from "./couponListMBTabComponent";
import CouponListMLPTabComponent from "./couponListMLPTabComponent";
import CouponListNCDSTabComponent from "./couponListNCDSTabComponent";
import CouponListNTTabComponent from "./couponListNTTabComponent";
import CouponListSKTabComponent from "./couponListSKTabComponent";
import CouponListSVQTabComponent from "./couponListSVQTabComponent";
import CouponListTATabComponent from "./couponListTATabComponent";
import CouponListTBGDTabComponent from "./couponListTBGDTabComponent";
import CouponListTTTabComponent from "./couponListTTTabComponent";
import CouponListVDTabComponent from "./couponListVDTabComponent";
//container
import IsConnectedContainer from "../../containers/isConnectedContainer";

//styles
import { styles, background, backgroundWhite } from "../../assets/styles";

class CouponListComponent extends Component {
    componentWillMount() {
        // this.props._onFetchCouponList('lazadaapp');
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
                    <CouponListAllTabComponent tabLabel='Tất Cả' _onFetchCouponList={this.props._onFetchCouponList} navigation={this.props.navigation}/>
                    <CouponListDTTabComponent tabLabel='Điện thoại - Máy tính bảng' _onFetchTabCouponList={this.props._onFetchTabCouponList} navigation={this.props.navigation} />
                    <CouponListTATabComponent tabLabel='Tivi - Âm thanh' />
                    <CouponListMLPTabComponent tabLabel='Máy tính - Laptop - Phụ kiện' />
                    <CouponListMAMQPTabComponent tabLabel='Máy ảnh - Máy quay phim' />
                    <CouponListTTTabComponent tabLabel='Thời trang - Mỹ phẩm' />
                    <CouponListMBTabComponent tabLabel='Mẹ Và Bé' />
                    <CouponListVDTabComponent tabLabel='Voucher & Dịch vụ' />
                    <CouponListTBGDTabComponent tabLabel='Thiết bị gia dụng' />
                    <CouponListNTTabComponent tabLabel='Nội thất' />
                    <CouponListDLTabComponent tabLabel='Điện lạnh' />
                    <CouponListNCDSTabComponent tabLabel='Nhà cửa đời sống' />
                    <CouponListSKTabComponent tabLabel='Sức khỏe' />
                    <CouponListSVQTabComponent tabLabel='Sách - VPP - Quà tặng' />
                </ScrollableTabView>
            </View>
        );
    }
}

export default CouponListComponent;