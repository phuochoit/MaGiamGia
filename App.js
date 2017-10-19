import React from 'react';
import { NetInfo, TouchableOpacity } from "react-native";
import { Root, Text, View } from "native-base";
import { AppLoading, Asset, Font } from 'expo';
import { Provider } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';

import store from "./src/redux/store";
import HomeApp from "./src/components/"
import IsConnected from "./src/components/isConnected"
import styles from "./assets/css/styles";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isReady: false,
            isConnected: true,
        };
    }
    async _loadAssetsAsync() {
        const imageAssets = cacheImages([
            require('./assets/icons/wifi-off.png'),
        ]);

        const fontAssets = cacheFonts([FontAwesome.font]);

        await Promise.all([...imageAssets, ...fontAssets]);
    }

    _onload() {
        NetInfo.isConnected.fetch().then(isConnected => {
            if (isConnected) {
                this.setState({
                    isConnected: true,
                });
            }
        });
    }

    async componentWillMount() {
        NetInfo.addEventListener('connectionChange', (isConnected) => {
            if (!isConnected) {
                this.setState({
                    isConnected: false,
                });
            }
        })
        await Expo.Font.loadAsync({
            Roboto: require("./node_modules/native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("./node_modules/native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("./node_modules/native-base/Fonts/Ionicons.ttf")
        });
        this.setState({ isReady: true });
    }
    render() {
        if (!this.state.isConnected) {
            return (
                <TouchableOpacity
                    style={{  flex: 1, justifyContent: 'center',  alignItems: 'center'  }}
                    onPress={this._onload.bind(this)}
                >
                    <IsConnected />
                </TouchableOpacity>
            );
        }
        if (!this.state.isReady) {
            return <Expo.AppLoading />;
        }
        return (
            <Provider store={store}>
                <Root>
                    <HomeApp />
                </Root>
            </Provider>
        );
    }
}

function cacheImages(images) {
    return images.map(image => {
        if (typeof image === 'string') {
            return Image.prefetch(image);
        } else {
            return Asset.fromModule(image).downloadAsync();
        }
    });
}

function cacheFonts(fonts) {
    return fonts.map(font => Font.loadAsync(font));
}