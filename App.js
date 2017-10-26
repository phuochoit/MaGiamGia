import React from 'react';
import { Root } from "native-base";
import { AppLoading, Font } from 'expo';
import { Provider } from 'react-redux';

import store from "./src/redux/store";
import HomeApp from "./src/components/"

export default class App extends React.Component {
    state = {
        fontLoaded: false,
    };
    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require('./node_modules/native-base/Fonts/Roboto.ttf'),
            Roboto_medium: require('./node_modules/native-base/Fonts/Roboto_medium.ttf'),
        });
        this.setState({ fontLoaded: true });
    }

    render() {
        if (!this.state.fontLoaded) {
            return (<Expo.AppLoading />);
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