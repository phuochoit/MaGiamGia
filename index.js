import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import AppNavigator from './navigators/appNavigation';
import Splash from "./Splash";

//Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';


import AllReducer from './reducers';

//Redux saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga'; 


const sagaMiddleware = createSagaMiddleware();

let store = createStore(AllReducer, applyMiddleware(sagaMiddleware));

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Provider store={store}>
                <AppNavigator />
            </Provider>
        );
    }
}

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { currentScreen: 'Splash' };
        setTimeout(() => {
            this.setState({ currentScreen: 'App' })
        }, 2000);
    }
    render() {
        const { currentScreen } = this.state
        let mainScreen = currentScreen === 'Splash' ? <Splash /> : <App />
        return mainScreen
    }
}

sagaMiddleware.run(rootSaga);
AppRegistry.registerComponent('magiamgia', () => Main);
