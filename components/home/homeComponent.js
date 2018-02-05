import React, { Component } from 'react';
import { Text, View, ScrollView} from 'react-native';
//component
import HeaderComponent from "../headerComponent";
import TopProductComponent from "./topProductComponent";
import OffersInformationsComponent from "./offersInformationsComponent";
//Container
import IsConnectedContainer  from "../../containers/isConnectedContainer";

//admob
import { AdMobBannerHeader } from "../admob";
//style
import { styles } from "../../assets/styles";
class HomeComponent extends Component {
    constructor(props){
        super(props);
        this.state = {};
        this.props.onfetchNetConnected();
    }
    componentDidMount() {
       
    }

    componentWillUnmount() {
        
    }
    
    render() {
        if (!this.props.isConnected){
            return (
                <IsConnectedContainer iconLeft={false} title="Mã Giảm Giá" showHeader={true} />
            );
        }
        return (
            <ScrollView style={[styles.wrapper]}>
                <HeaderComponent iconLeft={false} title="Mã Giảm Giá" navigation={this.props.navigation}/>
                <View style={styles.flex0}>
                    <OffersInformationsComponent {...this.props} />
                    <AdMobBannerHeader bannerSize="banner"/>
                    <TopProductComponent {...this.props}/>
                </View>
            </ScrollView>
        );
    }
}

export default HomeComponent;