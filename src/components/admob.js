import React from "react";
import { View } from "react-native";
import {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded
} from "expo";

const BANNER_HEADER = 'ca-app-pub-1070789846238739/4166547433';
const BANNER_FOOTER = 'ca-app-pub-1070789846238739/8765717123';
const BANNER_CONETNET = 'ca-app-pub-1070789846238739/6954420939';

AdMobInterstitial.setTestDeviceID("EMULATOR");
console.disableYellowBox = true;

export class AdMobBannerHeader extends React.Component {
    render() {
        return (
            <View style={{alignItems:'center', marginTop:5}}>
                <AdMobBanner
                    bannerSize={this.props.bannerSize}
                    adUnitID={BANNER_HEADER}
                    didFailToReceiveAdWithError={this.bannerError}
                    testDeviceID="EMULATOR"
                />
            </View>
        )
    }
}

export class AdMobBannerFooter extends React.Component {
    render() {
        return (
            <View style={{ alignItems: 'center', marginTop: 5 }}>
                <AdMobBanner
                    bannerSize={this.props.bannerSize}
                    adUnitID={BANNER_FOOTER}
                    didFailToReceiveAdWithError={this.bannerError}
                    testDeviceID="EMULATOR"
                />
            </View>
        )
    }
}

export class AdMobBannerConetnet extends React.Component {
    render() {
        return (
            <View style={{ alignItems: 'center', marginTop: 5 }}>
                <AdMobBanner
                    bannerSize={this.props.bannerSize}
                    adUnitID={BANNER_CONETNET}
                    didFailToReceiveAdWithError={this.bannerError}
                    testDeviceID="EMULATOR"
                />
            </View>
        )
    }
}
