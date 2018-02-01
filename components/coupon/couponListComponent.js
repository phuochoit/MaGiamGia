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
import { styles } from "../../assets/styles";

class CouponListComponent extends Component {
    componentWillMount() {
        
    }
    render() {
        const { navigate, state } = this.props.navigation;
        const componentTitle =`Chương Trình Giảm Giá ${state.params.title}`;
        return (
            <View style={[styles.wrapper, styles.flex1]}>
                <HeaderComponent iconLeft={true} title={componentTitle} navigation={this.props.navigation}/>
                
                <ScrollableTabView
                    style={{ flex: 1, backgroundColor: '#fff', borderBottomColor: '#2FB8FE'}}
                    initialPage={0}
                    tabBarPosition="top"
                    tabBarBackgroundColor='#fff'
                    tabBarActiveTextColor='#2FB8FE'
                    tabBarUnderlineStyle={{ backgroundColor: '#2FB8FE'}}
                    renderTabBar={() => <ScrollableTabBar style={{ backgroundColor: '#fff', borderBottomColor: '#2FB8FE' }}/>}
                >
                    <CouponListAllTabComponent tabLabel='Tất Cả' />
                    <CouponListDTTabComponent tabLabel='Điện thoại - Máy tính bảng' />
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