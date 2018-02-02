import React from "react";
import { View } from "react-native";
import {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded,
} from 'react-native-admob'

const BANNER_HEADER = 'ca-app-pub-1070789846238739/4166547433';
const BANNER_FOOTER = 'ca-app-pub-1070789846238739/8765717123';
const BANNER_CONETNET = 'ca-app-pub-1070789846238739/4133743797';
const BANNER_FULL = 'ca-app-pub-1070789846238739/5166913425';
export class AdMobBannerHeader extends React.Component {
    render() {
        return (
            <View style={{ alignItems: 'center', marginTop: 5, position: 'absolute', bottom: 0, right: 0, left: 0 }}>
                <AdMobBanner
                    adSize={this.props.bannerSize}
                    adUnitID={BANNER_HEADER}
                    testDevices={[AdMobBanner.simulatorId]}
                    onAdFailedToLoad={error => console.error(error)}
                />
            </View>
        )
    }
}

export class AdMobBannerContent extends React.Component {
    render() {
        return (
            <View style={{ alignItems: 'center', marginTop: 5 }}>
                <AdMobBanner
                    adSize={this.props.bannerSize}
                    adUnitID={BANNER_CONTNET}
                    testDevices={[AdMobBanner.simulatorId]}
                    onAdFailedToLoad={error => console.error(error)}
                />
            </View>
        )
    }
}

export class AdMobBannerFooter extends React.Component {
    render() {
        return (
            <View style={{ alignItems: 'center', marginTop: 5, position: 'absolute', bottom:0, right:0, left:0 }}>
                <AdMobBanner
                    adSize={this.props.bannerSize}
                    adUnitID={BANNER_FOOTER}
                    testDevices={[AdMobBanner.simulatorId]}
                    onAdFailedToLoad={error => console.error(error)}
                />
            </View>
        )
    }
}
