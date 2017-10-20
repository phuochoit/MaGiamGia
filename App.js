import React from 'react';
import { Root, Text, View } from "native-base";
import { AppLoading, Asset, Font } from 'expo';
import { Provider } from 'react-redux';
import { Ionicons, FontAwesome, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import store from "./src/redux/store";
import HomeApp from "./src/components/"
import IsConnected from "./src/components/isConnected"

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isReady: false,
        };
    }

    async _loadAssetsAsync() {
        const imageAssets = cacheImages([
            require('./assets/icons/wifi-off.png'),
        ]);

        const fontAssets = cacheFonts([FontAwesome.font, Ionicons.font]);

        await Promise.all([...imageAssets, ...fontAssets]);
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("./node_modules/native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("./node_modules/native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("./node_modules/native-base/Fonts/Ionicons.ttf")
        });

    }
    render() {
        
        if (!this.state.isReady) {
            return <AppLoading
                startAsync={this._loadAssetsAsync}
                onFinish={() => this.setState({ isReady: true })}
                onError={console.warn}
            />;
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
