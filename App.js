import React from 'react';
import { Root } from "native-base";
import { AppLoading, Font } from 'expo';
import { Provider } from 'react-redux';
import { BackHandler } from "react-native";
import { addNavigationHelpers, NavigationActions } from "react-navigation";

import { createStore } from "redux";

import AppWithNavigationState from "./src2/navigators/"
import AllReducer from "./src2/reducers";
let store = createStore(AllReducer);

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
                <AppWithNavigationState />
            </Provider>
        );
    }
}