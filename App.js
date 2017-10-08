import React from 'react';
import { Provider } from 'react-redux';
import store from "./src/redux/store";
import Home from "./src/components/"
import { AppLoading } from 'expo';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            isReady: false
        };
    }
    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("./node_modules/native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("./node_modules/native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("./node_modules/native-base/Fonts/Ionicons.ttf")
        });
        this.setState({ isReady: true });
    }
    render() {
        if (!this.state.isReady) {
            return <Expo.AppLoading />;
        }
        return (
            <Provider store={store}>
                <Home />
            </Provider>
        );
    }
}

