import React, { Component } from 'react';
import { Text, View} from 'react-native';
import ScrollableTabView, { ScrollableTabBar} from 'react-native-scrollable-tab-view';

// component
import HeaderComponent from "../headerComponent";
import IsloadingComponent from "../isloading";

//componet tab
import CouponListTabComponent from "./couponListTabComponent";
//container
import IsConnectedContainer from "../../containers/isConnectedContainer";

//styles
import { styles } from "../../assets/styles";

class CouponListComponent extends Component {
    render() {
        const { navigate, state } = this.props.navigation;
        const componentTitle =`Chương Trình Giảm Giá ${state.params.title}`;
        return (
            <View style={[styles.wrapper, styles.flex1]}>
                <HeaderComponent iconLeft={true} title={componentTitle} navigation={this.props.navigation}/>
                
                <ScrollableTabView
                    style={{ flex: 1, backgroundColor: '#fff'}}
                    initialPage={0}
                    tabBarPosition="top"
                    tabBarUnderlineStyle={{ backgroundColor: '#2FB8FE'}}
                    renderTabBar={() => <ScrollableTabBar />}
                >
                    <CouponListTabComponent tabLabel='Tab #1' />
                    <Text tabLabel='Tab #2 word word'>favorite</Text>
                    <Text tabLabel='Tab #3 word word word'>project</Text>
                    <Text tabLabel='Tab #4 word word word word'>favorite</Text>
                    <Text tabLabel='Tab #5 word word word word'>Tab #5</Text>
                </ScrollableTabView>
            </View>

            
        );
    }
}

export default CouponListComponent;