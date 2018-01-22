import React, { Component } from 'react';
import { Text, View, ScrollView } from "react-native";
import { Content } from "native-base";

import HeaderComponents from "../HeaderComponents";
import OffersComponent from "./OffersComponent";
import TopComponent from "./TopComponent";

class HomeComponent extends Component {
    componentDidMount(){
        this.props.onFetchTopProduct();
    }
    render() {
        return (
            <View  style={{flex:1}}>
                <HeaderComponents {...this.props} menuleft="0" menuright="0" menutitle="Trang Chủ" />
                <View style={{ flex: 1}}>
                    <View style={{flex:35}}>
                        <OffersComponent {...this.props} />
                    </View>
                    <View style={{ flex: 65, backgroundColor: '#fff000' }}>
                        <TopComponent {...this.props} />
                    </View>
                </View>
            </View>
        );
    }
}

export default HomeComponent;