import React, { Component } from 'react';
import { Text, View, ScrollView, BackHandler, Platform, Alert} from 'react-native';
import RNExitApp from 'react-native-exit-app-no-history';
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
        BackHandler.addEventListener('hardwareBackPress', this._backButtonPress.bind(this));
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this._backButtonPress.bind(this));
        
    }
    _backButtonPress(){
        if (this.props.navigation.state.routeName === 'HOME'){
            Alert.alert(
                'Thông Báo',
                'Bạn Muốn Đóng Ứng Dụng!',
                [
                    { text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                    {
                        text: 'Yes', onPress: () => {
                            RNExitApp.exitApp();
                        }
                    },
                ],
                { cancelable: true },
            );
        }
        return true;
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