import React from "react";
import { View } from "react-native";
import {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded
} from "expo";

const BANNER_ID = 'ca-app-pub-1070789846238739/8765717123';
const BANNER_PUBLISHE  = 'ca-app-pub-1070789846238739/6954420939';

// AdMobInterstitial.setAdUnitID(INTERSTITIAL_ID);
AdMobInterstitial.setTestDeviceID("EMULATOR");
// AdMobRewarded.setAdUnitID(REWARDED_ID);
console.disableYellowBox = true;

export class AdMobBanner_AdMob extends React.Component {
    render() {
        return (
            <View style={{alignItems:'center', marginTop:5}}>
                <AdMobBanner
                    bannerSize={this.props.bannerSize}
                    adUnitID={BANNER_ID}
                    didFailToReceiveAdWithError={this.bannerError}
                    testDeviceID="EMULATOR"
                />
            </View>
        )
    }
}
